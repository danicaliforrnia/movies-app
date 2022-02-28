import React from 'react';
import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { nFormatter } from '../../utils/n-formatter';
import { DEFAULT_AVATAR } from '../../constants/common';
import PropTypes from 'prop-types';

const MovieCard = ({ movie, studios, imgHeight, children }) => {
    return (
        <>
            <Card>
                <CardHeader
                    title={ movie?.name }
                />
                <CardMedia
                    component="img"
                    height={ imgHeight }
                    image={ movie?.img || DEFAULT_AVATAR }
                    alt={ movie?.name }
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        { studios?.map(studio => movie.studioId === studio.id && studio.name) }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: { nFormatter(movie?.price) }$
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    { children }
                </CardActions>
            </Card>
        </>
    );
};

MovieCard.defaultProps = {
    imgHeight: '250',
    children: null
};

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
    studios: PropTypes.array.isRequired,
    imgHeight: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.func,
        PropTypes.elementType
    ])
};

export default MovieCard;
