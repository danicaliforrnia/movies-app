import PropTypes from 'prop-types';
import { Grid, IconButton, Tooltip } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';

const MoviesList = ({ movies, studios }) => {
    return (
        <Grid container spacing={ 2 }>
            {
                movies.map((movie, index) => (
                    <Grid item xs={ 12 } sm={ 4 } md={ 2 } key={ index }>
                        <MovieCard studios={ studios } movie={ movie } key={ movie.id }>
                            <IconButton aria-label="sell movie" component={ Link }
                                        to={ `/transfers/movies/${ movie.id }` }>
                                <Tooltip title="Sell movie">
                                    <AttachMoneyIcon/>
                                </Tooltip>
                            </IconButton>
                        </MovieCard>
                    </Grid>
                ))
            }
        </Grid>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    studios: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
export default MoviesList;
