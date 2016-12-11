import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import { selectLocationState } from './containers/App/selectors';
import { translationMessages } from './i18n';
import App from './containers/App';
import LanguageProvider from './containers/LanguageProvider';
import configureStore from './store';
import createRoutes from './routes';
import './assets/scss/vendor.scss';
import './assets/scss/app.scss';

/*
|--------------------------------------------------------------------------
| app.js
|--------------------------------------------------------------------------
|
| This is the entry file for the application, only setup and boilerplate
| code.
|
| Lets start with initializing the state.
|
*/

const initialState = {};

/*
|--------------------------------------------------------------------------
| Create redux store with history
|--------------------------------------------------------------------------
|
| Create redux store with history
| this uses the singleton browserHistory provided by react-router
| Optionally, this could be changed to leverage a created history
| e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
|
*/

const store = configureStore(initialState, browserHistory);

/*
|--------------------------------------------------------------------------
| Sync history abnd store
|--------------------------------------------------------------------------
|
| Sync history and store, as the react-router-redux reducer
| is under the non-default key ("routing"), selectLocationState
| must be provided for resolving how to retrieve the "route" in the state
|
*/

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: selectLocationState(),
});


/*
|--------------------------------------------------------------------------
| Init Router
|--------------------------------------------------------------------------
|
| Set up the router, wrapping all Routes in the App component
|
*/

const rootRoute = {
    component: App,
    childRoutes: createRoutes(store),
};

/*
|--------------------------------------------------------------------------
| Init Render
|--------------------------------------------------------------------------
|
| Set render. We use useScroll() to scroll to the top when going to a new
| page, imitating default browser behavior.
|
*/

const render = (translatedMessages) => {
    ReactDOM.render(
        <Provider store={store}>
            <LanguageProvider messages={translatedMessages}>
                <Router
                    history={history}
                    routes={rootRoute}
                    render={applyRouterMiddleware(useScroll())}
                />
            </LanguageProvider>
        </Provider>,
        document.getElementById('app')
    );
};

/*
|--------------------------------------------------------------------------
| Hot Reload
|--------------------------------------------------------------------------
|
| Hot reloadable translation json files
|
*/

if (module.hot) {
    // ------------------------------------------------------
    // modules.hot.accept does not accept dynamic dependencies,
    // have to be constants at compile-time
    module.hot.accept('./i18n', () => {
        render(translationMessages);
    });
}

/*
|--------------------------------------------------------------------------
| Init chunked polyfill
|--------------------------------------------------------------------------
|
| Chunked polyfill for browsers without Intl support
|
*/

if (!window.Intl) {
    Promise.all([
        System.import('intl'),
        System.import('intl/locale-data/jsonp/en.js'),
    ]).then(() => render(translationMessages));
} else {
    render(translationMessages);
}
