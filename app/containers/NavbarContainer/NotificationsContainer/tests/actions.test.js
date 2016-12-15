import expect from 'expect';
import {
    REQUEST_NOTIFICATIONS,
    REQUEST_NOTIFICATIONS_SUCCEEDED,
    REQUEST_NOTIFICATIONS_FAILED,
} from '../constants';
import {
    requestNotifications,
    requestNotificationsSucceeded,
    requestNotificationsFailed,
} from '../actions';

describe('NotificationsContainer actions', () => {
    const notifications = [{
        id: 60798548,
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/derekcramer/128.jpg',
        message: 'Officiis sapiente voluptatem porro.',
        timestamp: 'Wed Dec 14 2016 19:41:40 GMT-0800 (PST)',
    }];

    describe('requestNotifications Action', () => {
        it('has a type of REQUEST_NOTIFICATIONS', () => {
            const expected = {
                type: REQUEST_NOTIFICATIONS,
            };

            expect(requestNotifications()).toEqual(expected);
        });

        it('has a type of REQUEST_NOTIFICATIONS_SUCCEEDED', () => {
            const expected = {
                type: REQUEST_NOTIFICATIONS_SUCCEEDED,
                notifications,
            };

            expect(requestNotificationsSucceeded(notifications)).toEqual(expected);
        });

        it('has a type of REQUEST_NOTIFICATIONS_FAILED', () => {
            const expected = {
                type: REQUEST_NOTIFICATIONS_FAILED,
                message: 'Internal error',
            };

            expect(requestNotificationsFailed((new Error('Internal error').message))).toEqual(expected);
        });
    });
});
