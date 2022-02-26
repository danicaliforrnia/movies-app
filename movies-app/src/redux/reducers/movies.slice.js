import { createSlice } from '@reduxjs/toolkit';
import { getMovies } from '../actions/movies.action';

const initialState = {
    loading: false,
    movies: []
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [getMovies.pending]: (state) => {
            state.loading = true;
        },
        [getMovies.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.movies = payload;
        },
        [getMovies.rejected]: (state) => {
            state.loading = false;
        }
    }
});

export const { reducers } = moviesSlice.actions;
export default moviesSlice.reducer;
