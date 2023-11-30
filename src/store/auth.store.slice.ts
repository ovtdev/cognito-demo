import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    idToken: null,
    register: false,
    requiredConfirmCode: false,
};

export const authStoreSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            const { accessToken, idToken } = action.payload;
            console.log("setToken:", accessToken);
            return { ...state, accessToken: accessToken, idToken: idToken };
        },
        setRegister: (state, action) => {
            const { register } = action.payload;
            console.log("setRegister:", register);
            return { ...state, register: register };
        },
        setRequiredConfirmCode: (state, action) => {
            const { requiredConfirmCode } = action.payload;
            console.log("setRegisterConfirmCode:", requiredConfirmCode);
            return { ...state, requiredConfirmCode: requiredConfirmCode };
        },
    },
});

export const { setToken, setRegister, setRequiredConfirmCode } = authStoreSlice.actions;
export default authStoreSlice.reducer;
