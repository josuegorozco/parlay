import { fromJS } from 'immutable';
import {
    DEFAULT_ACTION
} from './constants';

/*
|--------------------------------------------------------------------------
| NavbarContainer reducer
|--------------------------------------------------------------------------
|
| Handles state
|
*/

const initialState = fromJS({});

/**
 * navbarContainerReducer
 *
 * @param state = initialState
 * @param action
 * @returns {state}
 */
function navbarContainerReducer(state = initialState, action) {
    switch (action.type) {
        case DEFAULT_ACTION:
            return state;
        default:
            return state;
    }
}

export default navbarContainerReducer;
