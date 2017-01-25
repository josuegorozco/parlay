import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_NAV_MENU } from './constants';
import { requestNavMenuSucceeded, requestNavMenuFailed } from './actions';
import response from './data/menu';

/*
|--------------------------------------------------------------------------
| Individual exports for testting
|--------------------------------------------------------------------------
|
| Default saga
|
*/

export function fetchNavMenuFromServer() {
    // return fetch('http://localhost:3001/api/nav-menu')
    //     .then(response => response.json());

    return response;
}

export function* fetchNavMenu() {
    try {
        const navMenu = yield call(fetchNavMenuFromServer);
        yield put(requestNavMenuSucceeded(navMenu));
    } catch (e) {
        yield put(requestNavMenuFailed(e.message));
    }
}

export function* fetchNavMenuSaga() {
    yield takeLatest(REQUEST_NAV_MENU, fetchNavMenu);
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
    fetchNavMenuSaga,
];
