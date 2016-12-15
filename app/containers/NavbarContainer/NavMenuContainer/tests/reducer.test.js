import expect from 'expect';
import { fromJS } from 'immutable';
import navMenuContainerReducer from '../reducer';

describe('navMenuContainerReducer', () => {
    it('returns the initial state', () => {
        expect(navMenuContainerReducer(undefined, {})).toEqual(fromJS({
            menu: [],
        }));
    });
});
