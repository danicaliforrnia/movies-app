import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/movies.slice';

export default configureStore({
    reducer: {
        movies: moviesReducer
    }
});
