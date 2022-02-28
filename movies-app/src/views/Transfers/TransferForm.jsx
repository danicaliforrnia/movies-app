import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Button, CircularProgress, FormControl, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { nFormatter } from '../../utils/n-formatter';

const TransferForm = ({ onTransfer, loadingTransfer }) => {
    const [studio, setStudio] = useState();
    const { studios } = useSelector((state) => state.studios);

    return (
        <Grid container spacing={ 2 } direction="column">
            <Grid item>
                <Typography variant="h6">
                    Transfer movie:
                </Typography>
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <TextField
                        select
                        label="Studios"
                        name="studio"
                        onChange={ e => setStudio(e.target.value) }>
                        { studios.map(studio => (
                            <MenuItem key={ studio.id }
                                      value={ studio.id }>{ studio.name } - { nFormatter(studio.money) }$</MenuItem>
                        )) }
                    </TextField>
                </FormControl>
            </Grid>
            <Grid item container xs={ 12 } spacing={ 2 }>
                <Grid item>
                    <Button variant="text" color="primary">
                        <Link to={ '/' } style={ { textDecoration: 'none' } }>
                            Go Back
                        </Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary"
                            onClick={ () => onTransfer(studio) }
                            disabled={ !studio || loadingTransfer }>
                        {
                            loadingTransfer ? <CircularProgress size={ 24 }/> : 'Transfer Movie'
                        }
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TransferForm;
