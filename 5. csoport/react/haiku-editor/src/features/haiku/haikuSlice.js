import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editor: "",
  selectedIndex: null,
  haikus: [
    `Téged vártalak
Mint hajnali fényt éjjel
Félve-remélve`,
  ],
};

const haikuSlice = createSlice({
  name: "haikus",
  initialState,
  reducers: {
    changeText: (state, { payload }) => {
      state.edit = payload;
    },
    addHaiku: (state, { payload: haiku }) => {
      state.haikus.push(haiku);
    },
    selectHaiku: (state, { payload: index }) => {
      state.selectedIndex = index;
      state.editor = state.haikus[index];
    },
    modifyHaiku: (state, { payload: text }) => {
      if (state.selectedInde !== null) {
        state.haikus[state.selectedIndex] = text;
      }
    },
    removeHaiku: (state) => {
      if (state.selectedIndex !== null) {
        state.haikus.splice(state.selectedIndex, 1);
      }
    },
  },
});
