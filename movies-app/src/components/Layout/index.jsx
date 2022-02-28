import React from 'react';
import { Grid } from '@mui/material';
import TopBar from './TopBar';
import PropTypes from 'prop-types';
import Main from './Main';

const Layout = ({ children }) => {
    return (
        <Grid container direction="column">
            <TopBar/>
            <Grid item xs={ 12 }>
                <Main>
                    { children }
                </Main>
            </Grid>
        </Grid>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.func,
        PropTypes.elementType
    ]).isRequired
};

export default Layout;
