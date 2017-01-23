process.env.NODE_ENV = 'production';
const React = require('react');
const { renderToString } = require('react-dom/server');
const { match, RouterContext } = require('react-router');
const routes = require('../src/main/routes').default;
const { Provider } = require('react-redux');
const { configureStoreProd } = require('../src/main/store/configureStore');

const store = configureStoreProd();

if (typeof window === 'undefined') {
    global.window = {};
}

function generateHtmlAtPath(location, doneCallback) {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
        if (error) {
            console.log(error);
        } else if (redirectLocation) {
            console.log(redirectLocation);
        } else if (renderProps) {
            console.log(`Prerendering path ${location}`);
            return doneCallback(renderToString(
                React.createElement(Provider,
                    { store },
                    React.createElement(RouterContext,
                        renderProps
                    )
                )
            ));
        } else {
            console.log('Path not found');
        }
        process.exit(1);
    });
}

export default generateHtmlAtPath;