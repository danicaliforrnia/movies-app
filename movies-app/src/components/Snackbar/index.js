import React, { useEffect, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';

const CustomSnackbar = ({ severity, open, message }) => {
    const [openSnackbar, setOpenSnackbar] = useState(open);

    useEffect(() => setOpenSnackbar(open), [open]);

    return (
        <Snackbar
            sx={ {
                position: 'absolute',
                top: 0,
                right: 4
            } }
            open={ openSnackbar } autoHideDuration={ 3000 } onClose={ () => setOpenSnackbar(false) }>
            <Alert severity={ severity } sx={ { width: '100%' } }>
                { message }
            </Alert>
        </Snackbar>
    );
};

CustomSnackbar.defaultProps = {
    severity: 'info',
    open: false
};

CustomSnackbar.propTypes = {
    severity: PropTypes.oneOf([
        'success',
        'error',
        'warning',
        'info'
    ]),
    open: PropTypes.bool,
    message: PropTypes.string.isRequired
};

export default CustomSnackbar;
