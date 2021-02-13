import { Input, InputAdornment, InputLabel, Select, MenuItem, FormControl, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useState } from 'react';

const SearchBar = ({ handleCountriesSearch, handleRegionSearch }) => {

    //I had to do that because America in api has different searching value and I wantend to add unique id to each element
    const continents = [
        { name: 'Africa', value: 'Africa', id: 1 },
        { name: 'America', value: 'Americas', id: 2 },
        { name: 'Asia', value: 'Asia', id: 3 },
        { name: 'Europe', value: 'Europe', id: 4 },
        { name: 'Oceania', value: 'Oceania', id: 5 },

    ]
    const [searchValue, setSearchValue] = useState('');
    const [continent, setContinent] = useState('');

    const handleContinentChange = (event) => {
        setContinent(event.target.value)
        setSearchValue('');
        handleRegionSearch(event.target.value)
    }
        ;
    const handleSearchInputChange = event => {
        setContinent('')
        setSearchValue(event.target.value)
    };

    return (
        <div className='wrapper'>
            <div className='inner-wrapper'>
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
                <Button onClick={() => handleCountriesSearch(searchValue)} variant="outlined">
                    {!searchValue.length ? 'Search All' : 'Search'}
                </Button>
            </div>

            <FormControl className='form'>
                <InputLabel className='form__label'>Filter by Region</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={continent}
                    onChange={handleContinentChange}
                    className='form__select'
                >
                    <MenuItem className='form__menu-item' value="">
                        <em>None</em>
                    </MenuItem>
                    {continents.map(continent => (
                        <MenuItem className='form__menu-item' key={continent.id} value={continent.value}>{continent.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SearchBar;