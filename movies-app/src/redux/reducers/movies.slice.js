import { createSlice } from '@reduxjs/toolkit';
import { getMovie, getMovies, transferMovie } from '../actions/movies.action';

const initialState = {
    loading: false,
    loadingTransfer: false,
    isTransferSuccess: undefined,
    transferMessage: '',
    movies: [],
    movie: null
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        resetTransfer(state) {
            state.isTransferSuccess = false;
            state.loadingTransfer = false;
        }
    },
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
            state.isTransferSuccess = false;
            state.transferMessage = '';
        },
        [transferMovie.fulfilled]: (state) => {
            state.loadingTransfer = false;
            state.isTransferSuccess = true;
            state.transferMessage = 'Movie transferred successfully';
        },
        [transferMovie.rejected]: (state, { payload }) => {
            state.loadingTransfer = false;
            state.isTransferSuccess = false;
            state.transferMessage = payload;
        }
    }
});

export const { resetTransfer } = moviesSlice.actions;
export default moviesSlice.reducer;
