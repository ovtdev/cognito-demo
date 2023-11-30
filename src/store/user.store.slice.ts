import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    username: "",
    email: "",
    password: "",
};

export const userStoreSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, username, email } = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
        },
    },
});

export const { addUser } = userStoreSlice.actions;
export default userStoreSlice.reducer;
