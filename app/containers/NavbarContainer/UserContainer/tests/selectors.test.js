import expect from 'expect';
import { fromJS } from 'immutable';
import { selectUserContainerDomain } from '../selectors';

const selector = selectUserContainerDomain();

describe('selectUserContainerDomain', () => {
    it('it should select the UserContainer state', () => {
        const userContainerState = fromJS({});
        const mockedState = fromJS({
            userContainer: userContainerState,
        });

        expect(selector(mockedState)).toEqual(userContainerState);
    });
});
