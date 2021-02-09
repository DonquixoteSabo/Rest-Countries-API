import { Input, InputAdornment, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useState } from 'react';

const SearchBar = ({ searchValue, handleSearchInputChange }) => {
    const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

    const [continent, setContinent] = useState('');
    const handleChange = (event) => setContinent(event.target.value)

    return (
        <div className='wrapper'>
            <Input
                className='search-input'
                value={searchValue}
                onChange={handleSearchInputChange}
                type='text'
                placeholder='Search for country...'
                startAdornment={
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                }
            />
            <FormControl className='form'>
                <InputLabel className='form__label'>Filter by Region</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={continent}
                    onChange={handleChange}
                    className='form__select'
                >
                    <MenuItem className='form__menu-item' value="">
                        <em>None</em>
                    </MenuItem>
                    {continents.map(continent => (
                        <MenuItem className='form__menu-item' key={continent} value={continent}>{continent}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SearchBar;