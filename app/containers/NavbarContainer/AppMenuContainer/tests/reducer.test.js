import expect from 'expect';
import { fromJS } from 'immutable';
import appMenuContainerReducer from '../reducer';

describe('appMenuContainerReducer', () => {
    it('returns the initial state', () => {
        expect(appMenuContainerReducer(undefined, {})).toEqual(fromJS({
            menu: [],
        }));
    });
});
