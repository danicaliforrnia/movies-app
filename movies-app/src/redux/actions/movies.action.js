import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../utils/axios';

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async (params, { rejectWithValue }) => {
        try {
            const response = await http({
                method: 'GET',
                url: '/movies'
            });
            return await response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
