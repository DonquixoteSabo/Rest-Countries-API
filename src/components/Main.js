import { useState } from 'react';
import { Container } from '@material-ui/core';

import CountriesList from './CountriesList';
import SearchBar from './SearchBar';

const Main = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChange = event => setSearchValue(event.target.value);

    return(
        <Container>
            <SearchBar 
            searchValue={searchValue} 
            handleSearchInputChange={handleSearchInputChange} />
            <CountriesList />
        </Container>
    ) 
}
 
export default Main;