import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Button, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';

const TransferForm = ({ onTransfer, loadingTransfer }) => {
    const [studio, setStudio] = useState();
    const { studios } = useSelector((state) => state.studios);

    return (
        <>
            <Grid item xs={ 12 } sm={ 4 } md={ 3 }>
                <FormControl fullWidth>
                    <InputLabel id="studios-select-label">Studios</InputLabel>
                    <Select
                        labelId="studios-select-label"
                        id="studios-select"
                        label="Studios"
                        onChange={ e => setStudio(e.target.value) }>
                        { studios.map(studio => (
                            <MenuItem key={ studio.id } value={ studio.id }>{ studio.name }</MenuItem>
                        )) }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item container xs={ 12 } spacing={ 2 }>
                <Grid item>
                    <Button variant="text" color="primary">
                        <Link to={ '/' } style={ { textDecoration: 'none' } }>
                            Cancel
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
        </>
    );
};

export default TransferForm;
