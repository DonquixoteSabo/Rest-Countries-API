import { Input, InputAdornment, Select } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const SearchBar = ({ searchValue, handleSearchInputChange }) => {

    return (
        <div className='wrapper'>
            <Input
                className='search__input'
                value={searchValue}
                onChange={handleSearchInputChange}
                type='text'
                startAdornment={
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                }
            />
            <Select className='search__select'>
                <option>siema1</option>
                <option>siema2</option>
                <option>siema3</option>
            </Select>
        </div>
    );
}

export default SearchBar;