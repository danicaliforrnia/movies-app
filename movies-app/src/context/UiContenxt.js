import React, { createContext, useState } from 'react';
import CustomSnackbar from '../components/Snackbar';

const initialState = {
    openSnackbar: false,
    snackbarMessage: '',
    snackbarSeverity: 'info'
};

const UiContext = createContext({
    ...initialState,
    setSnackbar: (snackParams) => null
});

export const UiProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    const setSnackbar = ({ openSnackbar, snackbarMessage, snackbarSeverity }) => {
        setState({
            openSnackbar,
            snackbarMessage,
            snackbarSeverity
        });
    };


    return <UiContext.Provider
        value={ { ...state, setSnackbar } }>
        { children }
        <CustomSnackbar open={ state.openSnackbar }
                        severity={ state.snackbarSeverity }
                        message={ state.snackbarMessage }
        />
    </UiContext.Provider>;
};

export default UiContext;
