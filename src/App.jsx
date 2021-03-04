import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Country, Main } from './components';
// 
import './styles/index.scss';

const App = () => {
    return (  
        <>
            <Header />
            <Router>
                <Switch>
                    <Route path='/country/:country' component={Country} />
                    <Route path='/' component={Main} />
                </Switch>
            </Router>
        </>
    );
}

export default App;