import { AuthServiceSingleton } from '../../store/auth.store.service';
import {IFormLogin} from "./Login";
import {appDispatch} from "../../store/store";
import {setRegister} from "../../store/auth.store.slice";

export type FieldType = {
    username?: string;
    password?: string;
};

export const onFinish = (values: IFormLogin) => {
    AuthServiceSingleton.login(values).then(resp => {
        console.log("Response login", resp);
    });
};

export const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

export const onRegister = () => {
    console.log("onRegister");
    appDispatch(setRegister({register: true}));
};
