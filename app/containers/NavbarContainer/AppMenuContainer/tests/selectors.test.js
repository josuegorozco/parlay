import expect from 'expect';
import { fromJS } from 'immutable';
import { selectAppMenuContainerDomain } from '../selectors';

const selector = selectAppMenuContainerDomain();

describe('selectAppMenuContainerDomain', () => {
    it('it should select the appMenuContainer state', () => {
        const appMenuContainerState = fromJS({
            menu: [],
        });

        const mockedState = fromJS({
            appMenuContainer: appMenuContainerState,
        });

        expect(selector(mockedState)).toEqual(appMenuContainerState);
    });
});
