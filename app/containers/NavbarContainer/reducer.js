import { fromJS } from 'immutable';
import {
    DEFAULT_ACTION,
} from './constants';

/*
|--------------------------------------------------------------------------
| NavbarContainer reducer
|--------------------------------------------------------------------------
|
| Handles state
|
*/

const initialState = fromJS({
    topics: [
        {
            name: 'libraries',
            description: 'links to useful open source libraries',
        },
        {
            name: 'apps',
            description: 'links to new and exciting apps',
        },
    ],
});

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
