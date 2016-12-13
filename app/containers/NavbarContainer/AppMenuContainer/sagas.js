import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_APP_MENU } from './constants';
import { requestAppMenuSucceeded, requestAppMenuFailed } from './actions';
import response from './data/menu';

/*
|--------------------------------------------------------------------------
| Individual exports for testting
|--------------------------------------------------------------------------
|
| Default saga
|
*/

export function fetchAppMenuFromServer() {
    // return fetch('http://localhost:3001/api/appmenu')
    //     .then(response => response.json());

    return response;
}

export function* fetchAppMenu() {
    try {
        const appMenu = yield call(fetchAppMenuFromServer);
        yield put(requestAppMenuSucceeded(appMenu));
    } catch (e) {
        yield put(requestAppMenuFailed(e.message));
    }
}

export function* fetchAppMenuSaga() {
    yield* takeLatest(REQUEST_APP_MENU, fetchAppMenu);
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
    fetchAppMenuSaga,
];
