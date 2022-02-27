import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getMovie } from '../../redux/actions/movies.action';
import { Button, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { getStudios } from '../../redux/actions/studios.action';
import { nFormatter } from '../../utils/n-formatter';

const Transfers = () => {
    const params = useParams();
    const movieId = params?.movieId;
    const dispatch = useDispatch();
    const [studio, setStudio] = useState();
    const { movie, loading } = useSelector((state) => state.movies);
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

    if (loading) {
        return <CircularProgress size={ 128 } sx={ { marginTop: 2 } }/>;
    }

    return (
        <Grid container spacing={ 4 }>
            <Grid item xs={ 12 }>
                <Typography variant="h3">
                    { movie?.name }
                </Typography>
            </Grid>
            <Grid item xs={ 12 }>
                <Typography variant="body1">
                    Price: { nFormatter(movie?.price) }$
                </Typography>
            </Grid>
            <Grid item xs={ 12 } sm={ 4 } md={ 2 }>
                <FormControl fullWidth>
                    <InputLabel id="studios-select-label">Studios</InputLabel>
                    <Select
                        labelId="studios-select-label"
                        id="studios-select"
                        label="Studios"
                        onChange={ e => setStudio(e.target.value) }
                    >
                        { studios.map(studio => (
                            <MenuItem value={ studio.id }>{ studio.name }</MenuItem>
                        )) }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item container xs={ 12 } spacing={ 2 }>
                <Grid item>
                    <Button variant="text" color="primary">
                        <Link to={ '/' } style={ { textDecoration: 'none' } }>
                            Cancel
                        </Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary"
                            onClick={ () => null } disabled={ !studio }>Transfer Movie</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Transfers;
