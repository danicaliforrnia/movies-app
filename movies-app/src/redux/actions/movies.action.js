import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../utils/axios';

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async ({ searchBy }, { rejectWithValue }) => {
        try {
            console.log(searchBy);
            let url = '/movies';

            if (searchBy) {
                url = `${ url }?searchBy=${ searchBy }`;
            }
            const response = await http({
                method: 'GET',
                url
            });
            return await response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
