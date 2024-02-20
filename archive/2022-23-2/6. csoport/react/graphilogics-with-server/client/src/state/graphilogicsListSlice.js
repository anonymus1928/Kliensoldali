/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    {
      id: 1,
      puzzle: ["###", " # "],
    },
  ],
};

const graphilogicsSlice = createSlice({
  name: "graphilogicsList",
  initialState,
  reducers: {
    setList: (state, { payload: puzzles }) => {
      state.lists = puzzles;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.fulfilled, (state, { payload: puzzles }) => {
      state.lists = puzzles;
    });
  },
});

// Reducer
export const graphilogicsListReducer = graphilogicsSlice.reducer;

// Actions
export const { setList } = graphilogicsSlice.actions;

// Async actions
// export const fetchList = () => async (dispatch) => {
//     const response = await fetch('http://localhost:3030/puzzles');
//     const result = await response.json();
//     dispatch(setList(result.data));
// };

export const fetchList = createAsyncThunk("graphilogics/fetchList", async () => {
  const response = await fetch("http://localhost:3030/puzzles");
  const result = await response.json();
  return result.data;
});
