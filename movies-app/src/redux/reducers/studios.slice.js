import { createSlice } from '@reduxjs/toolkit';
import { getStudios } from '../actions/studios.action';

const initialState = {
    loading: false,
    studios: []
};

export const studiosSlice = createSlice({
    name: 'studios',
    initialState,
    reducers: {},
    extraReducers: {
        [getStudios.pending]: (state) => {
            state.loading = true;
        },
        [getStudios.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.studios = payload;
        },
        [getStudios.rejected]: (state) => {
            state.loading = false;
        }
    }
});

export const { reducers } = studiosSlice.actions;
export default studiosSlice.reducer;
