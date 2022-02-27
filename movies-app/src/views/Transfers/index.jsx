import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getMovie, transferMovie } from '../../redux/actions/movies.action';
import { CircularProgress, Grid } from '@mui/material';
import { getStudios } from '../../redux/actions/studios.action';
import CustomSnackbar from '../../components/Snackbar';
import TransferHeader from './TransferHeader';
import TransferForm from './TransferForm';

const Transfers = () => {
    const params = useParams();
    const movieId = params?.movieId;
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const { movie, loading, loadingTransfer, transferSuccess } = useSelector((state) => state.movies);
    const { studios } = useSelector((state) => state.studios);

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
        setOpen(transferSuccess);
    }, [transferSuccess]);

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
            <CustomSnackbar open={ open }
                            severity="success"
                            message="Transfer done successfully"
            />
        </>
    );
};

export default Transfers;
