import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice/userSlice'

//configure the redux-store
export const store = configureStore({
    reducer:{
        user: userReducer
    }
})