import { fromJS } from 'immutable';
import {
    REQUEST_NAV_MENU_SUCCEEDED,
} from './constants';

/*
|--------------------------------------------------------------------------
| NavMenuContainer reducer
|--------------------------------------------------------------------------
|
| Handles state
|
*/

const initialState = fromJS({
    menu: [],
});

/**
 * navMenuContainerReducer
 *
 * @param state = initialState
 * @param action
 * @returns {state}
 */
function navMenuContainerReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_NAV_MENU_SUCCEEDED:
            return state.set('menu', action.menu);
        default:
            return state;
    }
}

export default navMenuContainerReducer;
