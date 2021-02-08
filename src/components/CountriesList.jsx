import { Container, Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const CountriesList = ({ searchValue, countries }) => {

    return (
        <Container>
            {countries.map(country => (
                <Card key={country.key} className='card'>
                    <CardMedia className='card__media' src={country.flag} title='country flag' component='img' />
                    <CardContent className='card__content'>
                        <Typography className='card__typography card__typography-name' gutterBottom variant="h5" component="h2">
                            {country.name}
                        </Typography>
                        <Typography className='card__typography' gutterBottom variant="h6" component="h3">
                            <span className='card__typography-title'>Population:</span> {country.population}
                        </Typography>
                        <Typography className='card__typography' gutterBottom variant="h6" component="h3">
                            <span className='card__typography-title'>Region:</span> {country.region}
                        </Typography>
                        <Typography className='card__typography' gutterBottom variant="h6" component="h3">
                            <span className='card__typography-title'>Capital</span>: {country.capital}
                        </Typography>
                    </CardContent>
                </Card>
            ))}

        </Container>
    );
}

export default CountriesList;