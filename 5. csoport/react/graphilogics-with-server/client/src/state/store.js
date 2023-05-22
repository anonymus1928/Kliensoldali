import { configureStore } from "@reduxjs/toolkit";
import { graphilogicsReducer } from "./graphilogicsSlice/graphilogicsSlice";

export const store = configureStore({
    reducer: graphilogicsReducer
});
