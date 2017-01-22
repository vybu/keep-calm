import 'whatwg-fetch';
import 'babel-polyfill';
import './main/styles/main.scss';
import './vendor/KeepCalm-Medium.ttf';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, IndexRedirect, Route } from 'react-router';

import configureStore from './main/store/configureStore';

import App from './main/components/App.jsx';
import Generator from './main/components/Generator.jsx';
import History from './main/components/History.jsx';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/generator"/>
                <Route path="/generator" component={Generator} />
                <Route path="/history" component={History} />
            </Route>
        </Router>
    </Provider>, document.getElementById('app'));
