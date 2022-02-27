import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { UiProvider } from './context/UiContenxt';

const App = () => {
    return (
        <Provider store={ store }>
            <UiProvider>
                <Routes/>
            </UiProvider>
        </Provider>
    );
};

export default App;
