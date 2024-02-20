import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { haikuReducer } from "../features/haiku/haikuSlice";
import { EditorReducer } from "./editor/reducer";
import { SelectedIndexReducer } from "./selectedIndex/reducer";
import { HaikusReducer } from "./haikus/reducer";

const rootReducer = combineReducers({
  editor: EditorReducer,
  selectedIndex: SelectedIndexReducer,
  haikus: HaikusReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
