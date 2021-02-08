import { useState, useEffect} from 'react';

import axios from 'axios';
import {nanoid} from 'nanoid';

import CountriesList from './CountriesList';
import SearchBar from './SearchBar';

const Main = () => {
    const [searchValue, setSearchValue] = useState('');
    const [countries, setCountries] = useState([{
        name: '',
        population: '',
        region: '',
        capital: '',
        flag: '',
        key: '',
    }]);

    const handleSearchInputChange = event => setSearchValue(event.target.value);
    
    useEffect(() => {
        const fetchCountries = async () => {
            const response = await axios.get('https://restcountries.eu/rest/v2/all');
            let countries = response.data;
            //I know I can destructure country values here but In this example I think this syntax is more clear
            countries = countries.map(country => ({
                name: country.name,
                population: country.population,
                region: country.region,
                capital: country.capital,
                flag: country.flag,
                key: nanoid(8),
            }))
            console.log(countries)
            setCountries(countries);
        }
        fetchCountries();
    }, [])

    return(
        <>
            <SearchBar 
            searchValue={searchValue} 
            handleSearchInputChange={handleSearchInputChange} />
            <CountriesList searchValue={searchValue} countries={countries} />
        </>
    ) 
}
 
export default Main;