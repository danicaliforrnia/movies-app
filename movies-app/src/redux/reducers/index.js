import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './movies.slice';
import studiosReducer from './studios.slice';

export default combineReducers({
    movies: moviesReducer,
    studios: studiosReducer
});
