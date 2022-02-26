import { Grid } from '@mui/material';
import FilterBar from './FilterBar';
import MoviesList from './MoviesList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from '../../redux/actions/movies.action';

const Movies = () => {
    const dispatch = useDispatch();
    const { movies, loading } = useSelector((state) => state.movies);

    const search = (params) => {
        console.log(params);
    };

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;

    return (
        <Grid container direction="column" spacing={ 4 }>
            <Grid item xs={ 12 }>
                <FilterBar search={ value => search(value) }/>
            </Grid>
            <Grid item xs={ 12 }>
                <MoviesList movies={ movies }/>
            </Grid>
        </Grid>
    );
};

export default Movies;
