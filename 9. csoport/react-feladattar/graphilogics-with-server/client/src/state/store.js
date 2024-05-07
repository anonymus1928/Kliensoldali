import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { graphilogicsReducer } from "./graphilogicsSlice";
import { graphilogicsListReducer } from "./graphilogicsListSlice";

export const store = configureStore({
    reducer: {
        graphilogics: graphilogicsReducer,
        auth: authReducer,
        graphilogicsList: graphilogicsListReducer,
    }
});