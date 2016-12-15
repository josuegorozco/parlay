import { fromJS } from 'immutable';
import {
    REQUEST_NOTIFICATIONS_SUCCEEDED,
} from './constants';

/*
|--------------------------------------------------------------------------
| NotificationsContainer reducer
|--------------------------------------------------------------------------
|
| Handles state
|
*/

const initialState = fromJS({
    notifications: [],
});

/**
 * notificationsContainerReducer
 *
 * @param state = initialState
 * @param action
 * @returns {state}
 */
function notificationsContainerReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_NOTIFICATIONS_SUCCEEDED:
            return state.set('notifications', action.notifications);
        default:
            return state;
    }
}

export default notificationsContainerReducer;
