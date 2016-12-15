import expect from 'expect';
import { fromJS } from 'immutable';
import { selectNavMenuContainerDomain } from '../selectors';

const selector = selectNavMenuContainerDomain();

describe('selectNavMenuContainerDomain', () => {
    it('it should select the navMenuContainer state', () => {
        const navMenuContainerState = fromJS({ menu: [] });
        const mockedState = fromJS({
            navMenuContainer: navMenuContainerState,
        });

        expect(selector(mockedState)).toEqual(navMenuContainerState);
    });
});
