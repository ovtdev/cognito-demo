import { AuthServiceSingleton } from '../../store/auth.store.service';
import {IFormRegister, IFormRegisterConfirm} from "./Register";
import {appDispatch} from "../../store/store";
import {setRegister, setRequiredConfirmCode} from "../../store/auth.store.slice";

export type FieldType = {
    username?: string;
    password?: string;
    name?: string;
    email?: string;
    confirmCode?: string;
};

export const onFinish = (values: IFormRegister) => {
    console.log('Success:', values);
    AuthServiceSingleton.register(values).then(resp => {
        console.log(resp);
    });
};

export const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

export const onLogin = () => {
    console.log("onLogin");
    appDispatch(setRegister({register: false}));
};

export const onConfirm = (values: IFormRegisterConfirm) => {
    console.log("onConfirm", values);
    AuthServiceSingleton.signupConfirm(values);
};
