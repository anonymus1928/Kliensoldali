import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    solution: [],
    table: [],
}

const graphiSlice = createSlice({
    name: 'graphi',
    initialState,
    reducers: {
        startGame: (state) => {
            state.solution = ["# #", " # ", "# #"];
        }
    }
});

// Reducer
export const graphiReducer = graphiSlice.reducer;

// Action
// export const {} = graphiSlice.actions;

// Selector
