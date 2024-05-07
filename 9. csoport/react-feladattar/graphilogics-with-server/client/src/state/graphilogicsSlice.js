import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  solution: [" # ", "###", " # "],
  table: ["   ", "   ", "   "],
  isSolutionChecked: false,
};

const graphilogicsSlice = createSlice({
  name: "graphilogics",
  initialState,
  reducers: {
    startGame: (state) => {
      state.solution = [
        "### #  ##### ###",
        "#   #    #   #  ",
        "### #    #   ###",
        "#   #    #   #  ",
        "### ###  #   ###",
      ];
      state.table = [
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
      ];
    },
    clickCell: (state, { payload }) => {
        const { i: indI, j: indJ } = payload;
        if(state.table[indI][indJ] === ' ') {
            state.table = state.table.map((row, i) => i === indI ? row.slice(0, indJ) + '#' + row.slice(indJ+1) : row);
        } else {
            state.table = state.table.map((row, i) => i === indI ? row.slice(0, indJ) + ' ' + row.slice(indJ+1) : row);
        }
    }
  },
});

// Actions
export const { startGame, clickCell } = graphilogicsSlice.actions;

// Reducer
export const graphilogicsReducer = graphilogicsSlice.reducer;

// Selector
export const getSolution = (state) => state.graphilogics.solution;
export const getTable = (state) => state.graphilogics.table;

export const getLeftNumbers = (state) => doTheThing(state.graphilogics.solution);
export const getTopNumbers = (state) => doTheThing(transpose(state.graphilogics.solution.map(row => row.split(''))).map(row => row.join('')));


// Utils
const doTheThing = (matrix) => matrix.map(row => row.replaceAll(/\s+/g, ' ').split(' ').filter(r => r.length > 0)).map(r => r.map(c => c.length));
const transpose = (matrix) => matrix[0].map((_, i) => matrix.map(row => row[i]));
