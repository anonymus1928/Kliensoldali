/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      puzzle: ["###", " # "],
    },
  ],
};

const graphilogicsListSlice = createSlice({
  name: "graphilogicsList",
  initialState,
  reducers: {
    setList: (state, { payload: puzzles }) => {
      state.list = puzzles;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.fulfilled, (state, { payload: puzzles }) => {
        state.list = puzzles;
    })
  }
});

// Reducer
export const graphilogicsListReducer = graphilogicsListSlice.reducer;

// Actions
export const { setList } = graphilogicsListSlice.actions;

// Async action
// export const fetchList = () => async (dispatch) => {
//     const response = await fetch('http://localhost:3030/puzzles');
//     const result = await response.json();
//     dispatch(setList(result.data));
// };

export const fetchList = createAsyncThunk(
    'graphilogics/fetchList',
    async () => {
        const response = await fetch('http://localhost:3030/puzzles');
        const result = await response.json();
        return result.data;
    }
);
