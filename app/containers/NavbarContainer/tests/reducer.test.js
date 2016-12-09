import expect from 'expect';
import { fromJS } from 'immutable';
import navbarContainerReducer from '../reducer';

describe('navbarContainerReducer', () => {
    it('returns the initial state', () => {
        expect(navbarContainerReducer(undefined, {})).toEqual(fromJS({
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
        }));
    });
});
