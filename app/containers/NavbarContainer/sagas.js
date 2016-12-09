// import { take, call, put, select } from 'redux-saga/effects';

/*
|--------------------------------------------------------------------------
| Individual exports for testting
|--------------------------------------------------------------------------
|
| Default saga
|
*/

/**
 * defaultSaga
 *
 * @returns {void}
 */
export function* defaultSaga() {
    return true;
}

/*
|--------------------------------------------------------------------------
| Export default
|--------------------------------------------------------------------------
|
| All sagas to be loaded
|
*/

export default [
    defaultSaga,
];
