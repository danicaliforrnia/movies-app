import { createSlice } from '@reduxjs/toolkit';
import { getMovie, getMovies, transferMovie } from '../actions/movies.action';

const initialState = {
    loading: false,
    loadingTransfer: false,
    transferSuccess: false,
    movies: [],
    movie: null
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
        },
        [getMovie.pending]: (state) => {
            state.loading = true;
        },
        [getMovie.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.movie = payload;
        },
        [getMovie.rejected]: (state) => {
            state.loading = false;
        },
        [transferMovie.pending]: (state) => {
            state.loadingTransfer = true;
            state.transferSuccess = false;
        },
        [transferMovie.fulfilled]: (state, { payload }) => {
            state.loadingTransfer = false;
            state.transferSuccess = true;
            state.movie = payload;
        },
        [transferMovie.rejected]: (state) => {
            state.loadingTransfer = false;
            state.transferSuccess = false;
        }
    }
});

export const { reducers } = moviesSlice.actions;
export default moviesSlice.reducer;
