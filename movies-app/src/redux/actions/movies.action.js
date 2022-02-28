import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../utils/axios';
import { getStudios } from './studios.action';

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async ({ searchBy }, { rejectWithValue }) => {
        try {
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

export const getMovie = createAsyncThunk(
    'movies/getMovie',
    async ({ movieId }, { rejectWithValue }) => {
        try {
            const response = await http({
                method: 'GET',
                url: `/movies/${ movieId }`
            });
            return await response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const transferMovie = createAsyncThunk(
    'movies/transferMovie',
    async ({ movieId, studio }, { dispatch, rejectWithValue }) => {
        try {
            const response = await http({
                method: 'PATCH',
                url: `/movies/${ movieId }/studio`,
                data: {
                    studio
                }
            });

            dispatch(getMovie({ movieId }));
            dispatch(getStudios());

            return await response.data;
        } catch (err) {
            return rejectWithValue(err?.response?.data?.message || 'Something bad happened, try again');
        }
    }
);
