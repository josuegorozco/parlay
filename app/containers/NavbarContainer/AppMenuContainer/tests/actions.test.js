import expect from 'expect';
import {
    REQUEST_APP_MENU,
    REQUEST_APP_MENU_SUCCEEDED,
    REQUEST_APP_MENU_FAILED,
} from '../constants';
import {
    requestAppMenu,
    requestAppMenuSucceeded,
    requestAppMenuFailed,
} from '../actions';
import menu from '../data/menu';

describe('AppMenuContainer actions', () => {
    describe('requestAppMenu Action', () => {
        it('has a type of REQUEST_APP_MENU', () => {
            const expected = {
                type: REQUEST_APP_MENU,
            };

            expect(requestAppMenu()).toEqual(expected);
        });

        it('has a type of REQUEST_APP_MENU_SUCCEEDED', () => {
            const expected = {
                type: REQUEST_APP_MENU_SUCCEEDED,
                menu,
            };

            expect(requestAppMenuSucceeded(menu)).toEqual(expected);
        });

        it('has a type of REQUEST_APP_MENU_FAILED', () => {
            const expected = {
                type: REQUEST_APP_MENU_FAILED,
                message: 'Internal error',
            };

            expect(requestAppMenuFailed((new Error('Internal error').message))).toEqual(expected);
        });
    });
});
