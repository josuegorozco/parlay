import expect from 'expect';
import {
    REQUEST_NAV_MENU,
    REQUEST_NAV_MENU_SUCCEEDED,
    REQUEST_NAV_MENU_FAILED,
} from '../constants';
import {
    requestNavMenu,
    requestNavMenuSucceeded,
    requestNavMenuFailed,
} from '../actions';
import menu from '../data/menu';

describe('NavMenuContainer actions', () => {
    describe('requestAppMenu Action', () => {
        it('has a type of REQUEST_NAV_MENU', () => {
            const expected = {
                type: REQUEST_NAV_MENU,
            };

            expect(requestNavMenu()).toEqual(expected);
        });

        it('has a type of REQUEST_NAV_MENU_SUCCEEDED', () => {
            const expected = {
                type: REQUEST_NAV_MENU_SUCCEEDED,
                menu,
            };

            expect(requestNavMenuSucceeded(menu)).toEqual(expected);
        });

        it('has a type of REQUEST_NAV_MENU_FAILED', () => {
            const expected = {
                type: REQUEST_NAV_MENU_FAILED,
                message: 'Internal error',
            };

            expect(requestNavMenuFailed((new Error('Internal error').message))).toEqual(expected);
        });
    });
});
