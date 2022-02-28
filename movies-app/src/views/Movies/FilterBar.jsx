import { debounce, TextField } from '@mui/material';

const FilterBar = ({ search }) => {
    const onSearch = debounce(value => search(value), 300);

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
