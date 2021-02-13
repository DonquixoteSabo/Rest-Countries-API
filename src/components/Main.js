import { useState, useEffect} from 'react';

import axios from 'axios';
import {nanoid} from 'nanoid';

import CountriesList from './CountriesList';
import SearchBar from './SearchBar';

const Main = () => {
    const [error, setError] = useState(false);
    const [searchingCountries, setSearchingCountries] = useState('');

    const [searchingRegion, setSearchingRegion] = useState('');

    const [countries, setCountries] = useState([{
        name: '',
        population: '',
        region: '',
        capital: '',
        flag: '',
        key: '',
    }]);

    const fetchCountriesByRegion = async () => {
        try {
            const response = await axios.get(`https://restcountries.eu/rest/v2/region/${searchingRegion}`);
            let countries = response.data;
    
            countries = countries.map(country => ({
                name: country.name,
                population: country.population,
                region: country.region,
                capital: country.capital,
                flag: country.flag,
                key: nanoid(8),
            }))

            setError(false)
            setSearchingCountries('')
            setCountries(countries);
          
        } catch {
            setError(true);
        }
        
    }

    const fetchAllCountries = async () => {
        try {
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

            setError(false);
            setSearchingCountries('');
            setSearchingRegion('');
            setCountries(countries);
            
        } catch {
            setError(true);
        }
    }

    const fetchCountriesByName = async () => {
        try {
            const response = await axios.get(`https://restcountries.eu/rest/v2/name/${searchingCountries}`);
            let countries = response.data
    
            countries = countries.map(country => ({
                name: country.name,
                population: country.population,
                region: country.region,
                capital: country.capital,
                flag: country.flag,
                key: nanoid(8),
            }))

            setError(false)
            setSearchingRegion('')
            setCountries(countries);
           
        } catch {
            setError(true);
        }
     
    }

    useEffect(()=>{
        if(searchingRegion) fetchCountriesByRegion();
        else fetchAllCountries();
    }, [searchingRegion]);

    useEffect(()=>{
        if(searchingCountries) fetchCountriesByName()
        else fetchAllCountries()
    }, [searchingCountries])

    useEffect(() => fetchAllCountries(), [])

    const handleCountriesSearch = (data) =>  {
        setSearchingCountries(data)
        setSearchingRegion('');
    };

    const handleRegionSearch = (data) => {
        setSearchingRegion(data)
        setSearchingCountries('');
    };

    return(
        <>
            <SearchBar 
            handleCountriesSearch={handleCountriesSearch}
            handleRegionSearch={handleRegionSearch}
             />
            {error ? <h1>Nie mamy tego krajuw  bazie danych</h1> :  <CountriesList countries={countries} />}
        </>
    ) 
}
 
export default Main;