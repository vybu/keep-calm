import 'whatwg-fetch';
import './main/styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import transportAgent from './common/transport';
import routes from './main/routes.jsx';
import configureStore from './main/store/configureStore';
import posterCanvas from './modules/posterCanvas';

transportAgent.setBase(process.env.NODE_ENV === 'production' ? 'api/jsonserver' : 'http://localhost:3005');

const store = configureStore();

posterCanvas.services.fontLoader.loadFont(null, 'Keep Calm', () => {
    store.dispatch(posterCanvas.actions.addLoadedFont('Keep Calm'));
});

posterCanvas.services.fontLoader.loadFont(null, 'fontello', () => {
    store.dispatch(posterCanvas.actions.addLoadedFont('fontello'));
});

render(<Provider store={store} >
    <Router history={browserHistory} routes={routes} />
</Provider>, document.getElementById('app')
);