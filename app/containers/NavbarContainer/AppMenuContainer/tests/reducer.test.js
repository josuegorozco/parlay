import expect from 'expect';
import { fromJS } from 'immutable';
import appMenuContainerReducer from '../reducer';

describe('appMenuContainerReducer', () => {
    it('returns the initial state', () => {
        expect(appMenuContainerReducer(undefined, {})).toEqual(fromJS({
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
        }));
    });
});
