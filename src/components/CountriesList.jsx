import { Container, Card, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';

const CountriesList = ({ searchValue, countries }) => {

    return (
        <Container className='cards-wrapper'>
            <Grid container spacing={3}>
                {countries.map(country => (
                    <Grid key={country.key} item xs={12} sm={6} md={3}>
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
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CountriesList;