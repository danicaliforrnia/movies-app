import { TextField } from '@mui/material';

const FilterBar = ({ search }) => {

    // TODO: debounce to avoid many consecutive request
    const onSearch = value => {
        search(value);
    };

    return (
        <TextField label="Filter by genre, price or title" variant="standard"
                   onChange={ e => onSearch(e.target.value) }
                   sx={ theme => ({
                       width: '400px',
                       [theme.breakpoints.down('md')]: {
                           width: '100%'
                       }
                   }) }/>
    );
};

export default FilterBar;
