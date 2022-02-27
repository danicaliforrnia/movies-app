import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../utils/axios';

export const getStudios = createAsyncThunk(
    'studios/getStudios',
    async (params, { rejectWithValue }) => {
        try {
            const response = await http({
                method: 'GET',
                url: '/studios'
            });
            return await response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
