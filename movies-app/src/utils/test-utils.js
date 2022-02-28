import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import moviesReducer from '../redux/reducers/movies.slice';
import studiosReducer from '../redux/reducers/studios.slice';

const reducer = combineReducers({
    movies: moviesReducer,
    studios: studiosReducer
});


function render(
    ui,
    {
        preloadedState,
        store = configureStore({ reducer, preloadedState }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={ store }>{ children }</Provider>;
    }

    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
