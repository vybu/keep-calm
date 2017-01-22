import 'whatwg-fetch';
import 'babel-polyfill';
import './main/styles/main.scss';
import './vendor/KeepCalm-Medium.ttf';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './main/routes';
import configureStore from './main/store/configureStore';


const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>, document.getElementById('app')
);
