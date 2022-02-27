import React from 'react';
import { Grid, Typography } from '@mui/material';
import { nFormatter } from '../../utils/n-formatter';

const TransferHeader = ({ movie }) => {
    return (
        <>
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
        </>
    );
};

export default TransferHeader;
