import { Container, Card, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


const CountriesList = ({ countries }) => {

    return (
        <Container className='cards-wrapper'>
            <Grid container spacing={3}>
                {countries.map(country => (
                    <Grid key={country.key} item xs={12} sm={6} md={3}>
                        <Link className='link' to={`/country/${country.name}`}>
                            <Card className='card'>
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
                        </Link>
                    </Grid>

                ))}
            </Grid>
        </Container>
    );
}

export default CountriesList;