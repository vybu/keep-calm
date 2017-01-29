import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reduxLogger from 'redux-logger';
import rootReducer from '../reducers';
import posterCanvas from '../../modules/posterCanvas';
import reduxThunk from 'redux-thunk';
export function configureStoreProd(initialState) {


    const middlewares = [
        posterCanvas.middleware,
        reduxThunk
    ];

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares)
        )
    );


    return store;
}

export function configureStoreDev(initialState) {

    const middlewares = [
        // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
        reduxImmutableStateInvariant(),
        posterCanvas.middleware,
        reduxLogger(),
        reduxThunk
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
        )
    );


    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;