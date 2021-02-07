import { useParams } from 'react-router-dom';

const Country = () => {
    let { country } = useParams();

    return <h1>Jesteśmy teraz na {country} </h1>;
}

export default Country;