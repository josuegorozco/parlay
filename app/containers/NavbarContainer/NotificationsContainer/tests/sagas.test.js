import expect from 'expect';
import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_NOTIFICATIONS } from '../constants';
import { fetchNotifications, fetchNotificationsFromServer, fetchNotificationsSaga } from '../sagas';
import { requestNotificationsFailed, requestNotificationsSucceeded } from '../actions';

const response = [{
    id: 60798548,
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/derekcramer/128.jpg',
    message: 'Officiis sapiente voluptatem porro.',
    timestamp: 'Wed Dec 14 2016 19:41:40 GMT-0800 (PST)',
}];

/*
|--------------------------------------------------------------------------
| Test sagas
|--------------------------------------------------------------------------
|
| Define tests for sagas.
|
*/

describe('fetchNotificationsSaga', () => {
    const generator = fetchNotificationsSaga();

    it('should watch for REQUEST_NOTIFICATIONS', () => {
        const takeDescriptor = generator.next().value;

        expect(takeDescriptor).toEqual(takeLatest(REQUEST_NOTIFICATIONS, fetchNotifications));
    });
});

describe('fetchNotifications', () => {
    let generator;

    beforeEach(() => {
        generator = fetchNotifications();

        expect(generator.next().value).toEqual(call(fetchNotificationsFromServer));
    });

    it('should dispatch requestNotificationsSucceeded if it requests the data successfully', () => {
        const putDescriptor = generator.next(response).value;

        expect(putDescriptor).toEqual(put(requestNotificationsSucceeded(response)));
    });

    it('should call the requestAppFailed action if response errors', () => {
        const e = new Error('Internal Error');
        const putDescriptor = generator.throw(e).value;

        expect(putDescriptor).toEqual(put(requestNotificationsFailed(e.message)));
    });
});
