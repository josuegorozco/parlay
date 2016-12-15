import {
    REQUEST_NOTIFICATIONS,
    REQUEST_NOTIFICATIONS_SUCCEEDED,
    REQUEST_NOTIFICATIONS_FAILED,
} from './constants';

/*
|--------------------------------------------------------------------------
| NotificationsContainer actions
|--------------------------------------------------------------------------
|
| Actions
|
*/

export function requestNotifications() {
    return {
        type: REQUEST_NOTIFICATIONS,
    };
}

export function requestNotificationsSucceeded(notifications) {
    return {
        type: REQUEST_NOTIFICATIONS_SUCCEEDED,
        notifications,
    };
}

export function requestNotificationsFailed(message) {
    return {
        type: REQUEST_NOTIFICATIONS_FAILED,
        message,
    };
}
