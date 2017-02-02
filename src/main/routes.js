import React from 'react';
import { IndexRedirect, Route } from 'react-router';

import App from './components/App.jsx';
import Generator from './components/Generator.jsx';
import History from './components/History.jsx';


const routes = (
    <Route>
        <Route path="/" component={App}>
            <IndexRedirect to="/generator"/>
            <Route path="/generator" component={Generator}/>
            <Route path="/history" component={History}/>
        </Route>
    </Route>
);

export default routes;
