/* eslint-disable no-unused-vars */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { editorReducer } from "./editor/reducer";
import { selectedIndexReducer } from "./selectedIndex/reducer";
import { haikusReducer } from "./haikus/reducer";

const rootReducer = combineReducers({
  editor: editorReducer,
  selectedIndex: selectedIndexReducer,
  haikus: haikusReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
