import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

const Country = () => {

    const numberWithSpaces = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let { country } = useParams();
    const [data, setData] = useState({
        nativeName: '',
        borders: [],
        capital: '',
        population: '',
        region: '',
        subregion: '',
        topLevelDomain: '',
        currencies: [],
        languages: [],
        flag: '',
    })
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
            const { nativeName, borders, capital, population, region, subregion, topLevelDomain, currencies, languages, flag } = response.data[0];

            setData({
                nativeName, borders, capital, population, region, subregion, topLevelDomain, currencies, languages, flag
            })
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Button className='btn' variant="contained">
                <Link className='link' to='/'><ArrowBack />Back</Link>
            </Button>
            <Container className='grid-container'>
                <img src={data.flag} alt='country flag' className='img' />
                <Typography className='heading' gutterBottom component='h1' variant='h2'>{country}</Typography>
                <div className='first-info'>
                    <Typography variant='h6' component='p'>
                        <span className='info-heading'>Native Name: </span>{data.nativeName}
                    </Typography>

                    <Typography variant='h6' component='p'>
                        <span className='info-heading'>Population: </span>{numberWithSpaces(data.population)}
                    </Typography>

                    <Typography variant='h6' component='p'>
                        <span className='info-heading'>Region: </span>{data.region}
                    </Typography>

                    <Typography variant='h6' component='p'>
                        <span className='info-heading'>Subregion </span>{data.subregion}
                    </Typography>

                    <Typography variant='h6' component='p'>
                        <span className='info-heading'>Capital: </span>{data.capital}
                    </Typography>
                </div>
                <div className="second-info">
                    <Typography variant='h6' component='p'>
                        <span className='info-heading'>Top Level Domain </span>{data.topLevelDomain}
                    </Typography>

                    <Typography variant='h6' component='p'>
                        <span className='info-heading'>Currencies: </span>
                        {
                            data.currencies.map((currency, index) => (
                                index !== data.currencies.length - 1 ? (
                                    currency.name + ', '
                                ) : currency.name
                            ))
                        }
                    </Typography>

                    <Typography variant='h6' component='p'>
                        <span className='info-heading'>Languages: </span>{data.languages.map((language, index) => (
                            index !== data.languages.length - 1 ? (
                                language.name + ', '
                            ) : language.name
                        ))}
                    </Typography>

                </div>
                <div className="border-info">
                    <Typography component='div' variant='h6'>
                        <span className='info-heading'>Border countries: </span>
                        {data.borders.length > 0 ? (
                            data.borders.map(border => (
                                <div className='border' key={border}>{border}</div>
                            ))) : <Typography variant='h6' component='h6'>This country doesn't have any border countries</Typography>

                        }

                    </Typography>
                </div>
            </Container>
        </>
    );
}

export default Country;

