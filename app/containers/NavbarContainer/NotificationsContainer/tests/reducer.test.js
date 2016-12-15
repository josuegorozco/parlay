import expect from 'expect';
import { fromJS } from 'immutable';
import notificationsContainerReducer from '../reducer';

describe('notificationsContainerReducer', () => {
    it('returns the initial state', () => {
        expect(notificationsContainerReducer(undefined, {})).toEqual(fromJS({
            notifications: [],
        }));
    });
});
