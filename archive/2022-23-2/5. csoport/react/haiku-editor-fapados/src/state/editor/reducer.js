/* eslint-disable no-unused-vars */

import { CHANGE_TEXT } from "./actions";

const initialState = "";

export const EditorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if(type === CHANGE_TEXT) {
    state = payload;
  }

  return state;
};
