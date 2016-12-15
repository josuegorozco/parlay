import expect from 'expect';
import { fromJS } from 'immutable';
import { selectNotificationsContainerDomain } from '../selectors';

const selector = selectNotificationsContainerDomain();

describe('selectNotificationsContainerDomain', () => {
    it('it should select the NotificationsContainer state', () => {
        const notificationsContainerState = fromJS({ notifications: [] });
        const mockedState = fromJS({
            notificationsContainer: notificationsContainerState,
        });

        expect(selector(mockedState)).toEqual(notificationsContainerState);
    });
});
