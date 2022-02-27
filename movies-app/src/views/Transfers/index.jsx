import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getMovie, transferMovie } from '../../redux/actions/movies.action';
import { CircularProgress, Grid } from '@mui/material';
import { getStudios } from '../../redux/actions/studios.action';
import CustomSnackbar from '../../components/Snackbar';
import TransferHeader from './TransferHeader';
import TransferForm from './TransferForm';
import { resetTransfer } from '../../redux/reducers/movies.slice';

const Transfers = () => {
    const params = useParams();
    const movieId = params?.movieId;
    const dispatch = useDispatch();
    const [enableSnackbar, setEnableSnackbar] = useState(false);
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        severity: 'info',
        message: ''
    });
    const {
        movie,
        loading,
        loadingTransfer,
        isTransferSuccess,
        transferMessage
    } = useSelector((state) => state.movies);
    const { studios } = useSelector((state) => state.studios);

    useEffect(() => {
        setEnableSnackbar(true);
        return () => dispatch(resetTransfer());
    }, []);

    useEffect(() => {
        if (movieId) {
            dispatch(getMovie({ movieId }));
        }
    }, [dispatch, movieId]);

    useEffect(() => {
        if (!studios.length) {
            dispatch(getStudios());
        }
    }, [studios]);

    useEffect(() => {
        setSnackbarState({
            open: enableSnackbar,
            severity: isTransferSuccess ? 'success' : 'error',
            message: transferMessage
        });

        if (isTransferSuccess) {
            dispatch(getMovie({ movieId }));
            dispatch(getStudios());
        }
    }, [isTransferSuccess, loadingTransfer]);

    if (loading) {
        return <CircularProgress size={ 128 } sx={ { marginTop: 2 } }/>;
    }

    return (
        <>
            <Grid container spacing={ 4 }>
                <TransferHeader movie={ movie }/>
                <TransferForm loadingTransfer={ loadingTransfer }
                              onTransfer={ studio => dispatch(transferMovie({ movieId, studio })) }/>
            </Grid>
            <CustomSnackbar open={ snackbarState.open }
                            severity={ snackbarState.severity }
                            message={ snackbarState.message }
            />
        </>
    );
};

export default Transfers;
