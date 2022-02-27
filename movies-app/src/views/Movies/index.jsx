import { CircularProgress, Grid } from '@mui/material';
import FilterBar from './FilterBar';
import MoviesList from './MoviesList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from '../../redux/actions/movies.action';

const Movies = () => {
    const dispatch = useDispatch();
    const { movies, loading } = useSelector((state) => state.movies);

    const search = async (searchBy) => {
        dispatch(getMovies({ searchBy }));
    };

    useEffect(() => {
        dispatch(getMovies({ searchBy: null }));
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={ 4 }>
            <Grid item xs={ 12 }>
                <FilterBar search={ value => search(value) }/>
            </Grid>
            <Grid item xs={ 12 } alignSelf={ loading ? 'center' : 'flex-start' }>
                {
                    loading ? <CircularProgress size={ 128 } sx={ { marginTop: 2 } }/> : <MoviesList movies={ movies }/>
                }
            </Grid>
        </Grid>
    );
};

export default Movies;
