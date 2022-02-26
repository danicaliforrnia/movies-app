import React from 'react';
import { AppBar, Grid, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import MENUS from '../../constants/menus';
import { TOP_BAR_HEIGHT } from '../../constants/styles';

const TopBar = () => {
    return (
        <AppBar position="fixed">
            <Toolbar style={ { height: TOP_BAR_HEIGHT } }>
                <Grid container spacing={ 2 }>
                    {
                        MENUS.map((menu) => (
                            <Grid key={ menu.id } item>
                                <Link to={ menu.route } style={ { textDecoration: 'none', color: '#ffffff' } }>
                                    { menu.text }
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

TopBar.propTypes = {};

export default TopBar;
