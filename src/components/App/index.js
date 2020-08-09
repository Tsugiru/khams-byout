import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import Browse from '../Browse';
import Home from '../Home';
import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <div>
            <Route exact path = {ROUTES.HOME} component = {Home} />
            <Route path = {ROUTES.BROWSE} component = {Browse} />
        </div>
    </Router>

    //TODO Add Elie's link in the div
);

export default App;