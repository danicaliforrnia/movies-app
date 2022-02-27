import { CircularProgress, Grid } from '@mui/material';
import FilterBar from './FilterBar';
import MoviesList from './MoviesList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from '../../redux/actions/movies.action';
import { getStudios } from '../../redux/actions/studios.action';

const Movies = () => {
    const dispatch = useDispatch();
    const { movies, loading } = useSelector((state) => state.movies);
    const { studios } = useSelector((state) => state.studios);

    useEffect(() => {
        dispatch(getMovies({ searchBy: null }));
        dispatch(getStudios());
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={ 4 }>
            <Grid item xs={ 12 }>
                <FilterBar search={ searchBy => dispatch(getMovies({ searchBy })) }/>
            </Grid>
            <Grid item xs={ 12 } alignSelf={ loading ? 'center' : 'flex-start' }>
                {
                    loading ? <CircularProgress size={ 128 } sx={ { marginTop: 2 } }/> : <MoviesList movies={ movies }
                                                                                                     studios={ studios }/>
                }
            </Grid>
        </Grid>
    );
};

export default Movies;
