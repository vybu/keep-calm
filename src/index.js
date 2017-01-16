import 'whatwg-fetch';
import 'babel-polyfill';
import './main/styles/main.scss';
import './vendor/KeepCalm-Medium.ttf';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './main/store/configureStore';
import TransportAgent from './common/transport';

import App from './main/components/App.jsx';

const store = configureStore();

TransportAgent.setBase('http://localhost:3030');

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app'));