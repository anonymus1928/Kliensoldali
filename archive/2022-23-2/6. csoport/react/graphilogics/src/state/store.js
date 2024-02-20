import { configureStore } from "@reduxjs/toolkit";
import { graphiReducer } from "./graphiSlice";

export const store = configureStore({
    reducer: graphiReducer
})
