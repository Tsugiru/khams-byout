import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Home = () => (
    <div>
        <h1>Home Page</h1>
        <Link to = {ROUTES.BROWSE}>Browse</Link>
    </div>
    
    //TODO : Add the link to Elie's page
);

export default Home;