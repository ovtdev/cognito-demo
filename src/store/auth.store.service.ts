import {IAuthServiceDeps, authServiceDeps} from "./auth.store.service.deps";
import {cognito} from "../config";
import {IFormRegister, IFormRegisterConfirm} from "../components/register/Register";
import { ICognitoUserAttributeData } from "amazon-cognito-identity-js";
import {IFormLogin} from "../components/login/Login";
import {appDispatch} from "./store";
import {setRegister, setRequiredConfirmCode, setToken} from "./auth.store.slice";
import {addUser} from "./user.store.slice";

class AuthService {

    deps: IAuthServiceDeps;

    constructor(deps: IAuthServiceDeps) {
        this.deps = deps;
    }

    async login(values: IFormLogin) {

        const { username, password} = values;
        const authenticationDetails = new this.deps.client.AuthenticationDetails({
            Username : username,
            Password : password,
        });

        const userPool = new this.deps.client.CognitoUserPool({
            UserPoolId : cognito.userPoolId,
            ClientId : cognito.clientId,
        });

        const cognitoUser = new this.deps.client.CognitoUser( {
            Username : username,
            Pool : userPool,
        });

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                const accessToken = result.getAccessToken().getJwtToken();
                const idToken = result.getIdToken().getJwtToken();
                console.log("accessToken:", accessToken);
                const cognitoUser = userPool.getCurrentUser();
                console.log("CognitoUser:", cognitoUser);
                if (cognitoUser) {
                    appDispatch(setToken({accessToken, idToken}));
                }
            },
            onFailure: function(err) {
                alert(err);
            },
        });
    }

    async register( values: IFormRegister ){

        const poolData = {
            UserPoolId : cognito.userPoolId,
            ClientId : cognito.clientId,
        };

        const { CognitoUserPool, CognitoUserAttribute} = this.deps.client;

        const userPool = new CognitoUserPool(poolData);

        const dataEmail = { Name : 'email', Value : values.email, };
        const dataPersonalName = { Name : 'name', Value : values.name, };

        const attributeEmail = new CognitoUserAttribute(<ICognitoUserAttributeData>dataEmail);
        const attributePersonalName = new CognitoUserAttribute(<ICognitoUserAttributeData>dataPersonalName);

        userPool.signUp(values.username, values.password, [attributeEmail, attributePersonalName], [], function(err, result){
            if (err || !result) {
                console.log(err);
                return;
            }
            const cognitoUser = result.user;
            console.log('Result register is ', result);
            if (cognitoUser) {
                appDispatch(setRegister({register: false}));
                appDispatch(setRequiredConfirmCode({requiredConfirmCode: true}));
                appDispatch(addUser({
                    username: cognitoUser.getUsername(),
                    name: values.name,
                    email: values.email,
                }));
            }
        });
    }

    signupConfirm( params: IFormRegisterConfirm ) {

        const { CognitoUserPool } = this.deps.client;
        const userPool = new CognitoUserPool({
            UserPoolId : cognito.userPoolId,
            ClientId : cognito.clientId,
        });

        const { confirmCode, username } = params;

        const cognitoUser = new this.deps.client.CognitoUser( {
            Username : username,
            Pool : userPool,
        });

        if (!cognitoUser) return;

        cognitoUser.confirmRegistration(confirmCode, true, (err, res) => {
            if (err) {
                console.log("Error to confirm email", err);
                return;
            }
            appDispatch(setRequiredConfirmCode({register: false}));
        });
    }

    async logout() {
        const userPool = new this.deps.client.CognitoUserPool({
            UserPoolId : cognito.userPoolId,
            ClientId : cognito.clientId,
        });
        const cognitoUser = userPool.getCurrentUser();
        if (cognitoUser) {
            cognitoUser.signOut();
            appDispatch(setToken({accessToken: null, idToken: null}));
        }
    }
}

export const AuthServiceSingleton = new AuthService(authServiceDeps);
export default { AuthServiceSingleton, AuthService };
