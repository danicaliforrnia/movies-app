import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useContext, useEffect, useState } from 'react';
import { getMovie, transferMovie } from '../../redux/actions/movies.action';
import { CircularProgress, Grid } from '@mui/material';
import { getStudios } from '../../redux/actions/studios.action';
import TransferForm from './TransferForm';
import { resetTransfer } from '../../redux/reducers/movies.slice';
import UiContext from '../../context/UiContenxt';
import MovieCard from '../../components/MovieCard';

const Transfers = () => {
    const params = useParams();
    const movieId = params?.movieId;
    const dispatch = useDispatch();
    const [enableSnackbar, setEnableSnackbar] = useState(false);
    const { setSnackbar } = useContext(UiContext);
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
        if (!loadingTransfer) {
            setSnackbar({
                openSnackbar: enableSnackbar,
                snackbarSeverity: isTransferSuccess ? 'success' : 'error',
                snackbarMessage: transferMessage
            });
        }
    }, [isTransferSuccess, loadingTransfer]);

    if (loading) {
        return <CircularProgress size={ 128 } sx={ { marginTop: 2 } }/>;
    }

    return (
        <>
            <Grid container
                  direction="row"
                  justifyContent="center">
                <Grid item xs={ 12 } md={ 6 } sx={ { padding: 2 } }>
                    { movie && <MovieCard movie={ movie } studios={ studios } imgHeight={ 'auto' }/> }
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <TransferForm loadingTransfer={ loadingTransfer }
                                  onTransfer={ studio => dispatch(transferMovie({ movieId, studio })) }/>
                </Grid>
            </Grid>
        </>
    );
};

export default Transfers;
