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
        injectSagas,
    } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

    // ------------------------------------------------------
    // Global modules
    const globalModules = [
        System.import('containers/NavbarContainer/AppMenuContainer/reducer'),
        System.import('containers/NavbarContainer/AppMenuContainer/sagas'),
        System.import('containers/NavbarContainer/NavMenuContainer/reducer'),
        System.import('containers/NavbarContainer/NavMenuContainer/sagas'),
        System.import('containers/NavbarContainer/UserContainer/reducer'),
        System.import('containers/NavbarContainer/UserContainer/sagas'),
    ];

    return [{
        path: '/',
        name: 'home',
        getComponent(nextState, cb) {
            const importModules = Promise.all(globalModules.concat([
                System.import('containers/HomePage'),
            ]));

            const renderRoute = loadModule(cb);

            importModules.then(([
                appMenuReducer,
                appMenuSagas,
                navMenuReducer,
                navMenuSagas,
                userReducer,
                userSagas,
                component,
            ]) => {
                injectReducer('appMenuContainer', appMenuReducer.default);
                injectSagas('appMenuContainer', appMenuSagas.default);
                injectReducer('navMenuContainer', navMenuReducer.default);
                injectSagas('navMenuContainer', navMenuSagas.default);
                injectReducer('userContainer', userReducer.default);
                injectSagas('userContainer', userSagas.default);
                renderRoute(component);
            });

            importModules.catch(errorLoading);
        },
    }, {
        path: '*',
        name: 'notfound',
        getComponent(nextState, cb) {
            const importModules = Promise.all(globalModules.concat([
                System.import('containers/NotFoundPage'),
            ]));

            const renderRoute = loadModule(cb);

            importModules.then(([
                appMenuReducer,
                appMenuSagas,
                navMenuReducer,
                navMenuSagas,
                userReducer,
                userSagas,
                component,
            ]) => {
                injectReducer('appMenuContainer', appMenuReducer.default);
                injectSagas('appMenuContainer', appMenuSagas.default);
                injectReducer('navMenuContainer', navMenuReducer.default);
                injectSagas('navMenuContainer', navMenuSagas.default);
                injectReducer('userContainer', userReducer.default);
                injectSagas('userContainer', userSagas.default);
                renderRoute(component);
            });

            importModules.catch(errorLoading);
        },
    }];
}
