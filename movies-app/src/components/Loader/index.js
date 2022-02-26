import React from 'react';
import { Box, LinearProgress } from '@mui/material';
import { TOP_BAR_HEIGHT } from '../../constants/styles';

const Loader = () => {
    return (
        <Box sx={ { marginTop: TOP_BAR_HEIGHT } }>
            <LinearProgress color="secondary"/>
        </Box>
    );
};

export default Loader;
