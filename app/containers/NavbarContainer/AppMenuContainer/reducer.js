import { fromJS } from 'immutable';
import {
    REQUEST_APP_MENU_SUCCEEDED,
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
    menu: [],
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
        case REQUEST_APP_MENU_SUCCEEDED:
            return state.set('menu', action.menu);
        default:
            return state;
    }
}

export default appMenuContainerReducer;
