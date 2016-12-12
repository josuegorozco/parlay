import { fromJS } from 'immutable';
import {
    DEFAULT_ACTION,
} from './constants';

/*
|--------------------------------------------------------------------------
| AppMenuContainer reducer
|--------------------------------------------------------------------------
|
| Handles state
|
*/

const initialState = fromJS({
    menu: [
        {
            id: 1,
            label: 'Inbox',
            icon: 'envelope',
            className: 'b-r b-b',
        },
        {
            id: 2,
            label: 'Contacts',
            icon: 'users',
            className: 'b-r b-b',
        },
        {
            id: 3,
            label: 'Calendar',
            icon: 'calendar',
            className: 'b-b',
        },
        {
            id: 4,
            label: 'Notes',
            icon: 'pencil',
            className: 'b-r',
        },
        {
            id: 5,
            label: 'To-do',
            icon: 'list-ul',
            className: 'b-r',
        },
        {
            id: 6,
            label: 'History',
            icon: 'history',
        },
    ],
});

/**
 * appMenuContainerReducer
 *
 * @param state = initialState
 * @param action
 * @returns {state}
 */
function appMenuContainerReducer(state = initialState, action) {
    switch (action.type) {
        case DEFAULT_ACTION:
            return state;
        default:
            return state;
    }
}

export default appMenuContainerReducer;
