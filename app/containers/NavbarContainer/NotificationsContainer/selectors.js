import { createSelector } from 'reselect';

/*
|--------------------------------------------------------------------------
| Direct
|--------------------------------------------------------------------------
|
| Direct selector to the notificationsContainer state domain
|
*/

const selectNotificationsContainerDomain = () => state => state.get('notificationsContainer');

/*
|--------------------------------------------------------------------------
| Other
|--------------------------------------------------------------------------
|
| Other specific selectors
|
*/

/*
|--------------------------------------------------------------------------
| Default
|--------------------------------------------------------------------------
|
| Default selector used by NotificationsContainer
|
*/

const selectNotificationsContainer = () => createSelector(
    selectNotificationsContainerDomain(),
    substate => substate.toJS(),
);

/*
|--------------------------------------------------------------------------
| Export default
|--------------------------------------------------------------------------
|
| Default / final exports
|
*/

export default selectNotificationsContainer;
export {
    selectNotificationsContainerDomain,
};
