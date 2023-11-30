import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from "amazon-cognito-identity-js";

export const  authServiceDeps = {
    client: {
        CognitoUserAttribute: CognitoUserAttribute,
        AuthenticationDetails: AuthenticationDetails,
        CognitoUserPool: CognitoUserPool,
        CognitoUser: CognitoUser
    }
};

export type IAuthServiceDeps = typeof authServiceDeps;
