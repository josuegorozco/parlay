import { getAsyncInjectors } from './utils/asyncInjectors';

/*
|--------------------------------------------------------------------------
| Error Loading
|--------------------------------------------------------------------------
|
| Init error loading
|
*/

const errorLoading = (err) => {
    console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

/*
|--------------------------------------------------------------------------
| loadModule
|--------------------------------------------------------------------------
|
| Loads component modules
|
*/

const loadModule = cb => (componentModule) => {
    cb(null, componentModule.default);
};

/*
|--------------------------------------------------------------------------
| Default export
|--------------------------------------------------------------------------
|
| Exports createRoutes as default
|
*/

/**
 * createRoutes
 *
 * @param store
 * @returns {array}
 */
export default function createRoutes(store) {
    // ------------------------------------------------------
    // Create reusable async injectors using getAsyncInjectors factory
    const {
        injectReducer,
        injectSagas
    } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

    return [{
        path: '/',
        name: 'home',
        getComponent(nextState, cb) {
            const importModules = Promise.all([
                System.import('containers/HomePage'),
                System.import('containers/NavbarContainer/reducer'),
                System.import('containers/NavbarContainer/sagas')
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([component, reducer, sagas]) => {
                injectReducer('navbarContainer', reducer.default);
                injectSagas('navbarContainer', sagas.default);
                renderRoute(component);
            });

            importModules.catch(errorLoading);
        }
    }, {
        path: '*',
        name: 'notfound',
        getComponent(nextState, cb) {
            System.import('containers/NotFoundPage')
                .then(loadModule(cb))
                .catch(errorLoading);
        }
    }];
}
