import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_NOTIFICATIONS } from './constants';
import { requestNotificationsSucceeded, requestNotificationsFailed } from './actions';

/*
|--------------------------------------------------------------------------
| Individual exports for testting
|--------------------------------------------------------------------------
|
| Default saga
|
*/

export function fetchNotificationsFromServer() {
    return fetch('http://localhost:3001/notifications')
        .then(response => response.json());
}

export function* fetchNotifications() {
    try {
        const notifications = yield call(fetchNotificationsFromServer);
        yield put(requestNotificationsSucceeded(notifications));
    } catch (e) {
        yield put(requestNotificationsFailed(e.message));
    }
}

export function* fetchNotificationsSaga() {
    yield takeLatest(REQUEST_NOTIFICATIONS, fetchNotifications);
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
    fetchNotificationsSaga,
];
