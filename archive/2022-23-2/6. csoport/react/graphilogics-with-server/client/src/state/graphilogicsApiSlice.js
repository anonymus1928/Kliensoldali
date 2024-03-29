import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = 'http://localhost:3030';

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;

        if(token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    }
});

export const graphilogicsApiSlice = createApi({
    reducerPath: 'graphilogicsApi',
    baseQuery,
    endpoints: (builder) => ({
        getPuzzles: builder.query({
            query: () => ({
                url: 'puzzles'
            }),
            transformResponse: (response) => response.data,
        }),
        login: builder.mutation({
            query: (body) => ({
                url: 'authentication',
                method: 'POST',
                body,
            }),
        }),
    }),
});

// Reducer
export const graphilogicsApiReducer = graphilogicsApiSlice.reducer;

// Hooks
export const { useGetPuzzlesQuery, useLoginMutation } = graphilogicsApiSlice;
