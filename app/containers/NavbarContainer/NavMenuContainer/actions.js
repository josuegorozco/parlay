import {
    REQUEST_NAV_MENU,
    REQUEST_NAV_MENU_SUCCEEDED,
    REQUEST_NAV_MENU_FAILED,
} from './constants';

/*
|--------------------------------------------------------------------------
| NavMenuContainer actions
|--------------------------------------------------------------------------
|
| Actions
|
*/

export function requestNavMenu() {
    return {
        type: REQUEST_NAV_MENU,
    };
}

export function requestNavMenuSucceeded(menu) {
    return {
        type: REQUEST_NAV_MENU_SUCCEEDED,
        menu,
    };
}

export function requestNavMenuFailed(message) {
    return {
        type: REQUEST_NAV_MENU_FAILED,
        message,
    };
}
