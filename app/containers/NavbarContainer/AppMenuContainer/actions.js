import {
    REQUEST_APP_MENU,
    REQUEST_APP_MENU_SUCCEEDED,
    REQUEST_APP_MENU_FAILED,
} from './constants';

/*
|--------------------------------------------------------------------------
| AppMenuContainer actions
|--------------------------------------------------------------------------
|
| Actions
|
*/

export function requestAppMenu() {
    return {
        type: REQUEST_APP_MENU,
    };
}

export function requestAppMenuSucceeded(menu) {
    return {
        type: REQUEST_APP_MENU_SUCCEEDED,
        menu,
    };
}

export function requestAppMenuFailed(message) {
    return {
        type: REQUEST_APP_MENU_FAILED,
        message,
    };
}
