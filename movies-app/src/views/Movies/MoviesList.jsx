import PropTypes from 'prop-types';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Tooltip,
    Typography
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from 'react-router-dom';
import { nFormatter } from '../../utils/n-formatter';

const DEFAULT_AVATAR = 'https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-600w-149083895.jpg';

const MoviesList = ({ movies, studios }) => {
    return (
        <Grid container spacing={ 2 }>
            {
                movies.map((movie, index) => (
                    <Grid item xs={ 12 } sm={ 4 } md={ 2 } key={ index }>
                        <Card>
                            <CardHeader
                                title={ movie.name }
                            />
                            <CardMedia
                                component="img"
                                height="250"
                                image={ movie.img ? movie.img : DEFAULT_AVATAR }
                                alt={ movie.name }
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Studios:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    { studios.map(studio => movie.studioId === studio.id && studio.name) }
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Grid container spacing={ 2 } alignItems="center">
                                    <Grid item>Price: { nFormatter(movie.price) }$</Grid>
                                    <Grid item>
                                        <IconButton aria-label="sell movie" component={ Link }
                                                    to={ `/transfers/movies/${ movie.id }` }>
                                            <Tooltip title="Sell movie">
                                                <AttachMoneyIcon/>
                                            </Tooltip>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
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
