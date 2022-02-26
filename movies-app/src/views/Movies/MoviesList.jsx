import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';

const DEFAULT_AVATAR = 'https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-600w-149083895.jpg';

const MoviesList = ({ movies }) => {

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

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
export default MoviesList;
