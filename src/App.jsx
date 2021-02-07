import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components';

import './styles/index.scss';

const App = () => {
    return (
        <>
            <Header />
            <Router>

                <Switch>
                    <Route path='/' />
                </Switch>
            </Router>
        </>
    );
}

export default App;