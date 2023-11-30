
export interface IFormRegister {
    username: string;
    password: string;
    name?: string;
    email?: string;
}

export interface IFormRegisterConfirm {
    confirmCode: string;
    username: string;
}
