import { fromJS } from 'immutable';
import {
    DEFAULT_ACTION,
} from './constants';

/*
|--------------------------------------------------------------------------
| UserContainer reducer
|--------------------------------------------------------------------------
|
| Handles state
|
*/

const initialState = fromJS({});

/**
 * userContainerReducer
 *
 * @param state = initialState
 * @param action
 * @returns {state}
 */
function userContainerReducer(state = initialState, action) {
    switch (action.type) {
        case DEFAULT_ACTION:
            return state;
        default:
            return state;
    }
}

export default userContainerReducer;
