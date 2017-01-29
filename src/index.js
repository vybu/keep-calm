import 'whatwg-fetch';
import './main/styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './main/routes';
import configureStore from './main/store/configureStore';
import posterCreator from './modules/posterCreator';

const store = configureStore();

posterCreator.services.fontLoader.loadFont(null, 'Keep Calm', () => {
    store.dispatch(posterCreator.actions.addLoadedFont('Keep Calm'));
});


render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>, document.getElementById('app')
);
