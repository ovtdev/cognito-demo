import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import userReducer from "./user.store.slice";
import authReducer from "./auth.store.slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
    },
});

export type AppDispatchType = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const appDispatch = store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
