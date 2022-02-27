import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { TOP_BAR_HEIGHT } from '../../constants/styles';

const Main = ({ children }) => {
    return (
        <main>
            <Box sx={ {
                minHeight: `calc(100vh - ${TOP_BAR_HEIGHT})`,
                padding: 2,
                marginTop: TOP_BAR_HEIGHT
            } }>
                { children }
            </Box>
        </main>
    );
};

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.func,
        PropTypes.elementType
    ]).isRequired
};

export default Main;
