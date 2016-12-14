import { createSelector } from 'reselect';

/*
|--------------------------------------------------------------------------
| Direct
|--------------------------------------------------------------------------
|
| Direct selector to the userContainer state domain
|
*/

const selectUserContainerDomain = () => state => state.get('userContainer');

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
| Default selector used by UserContainer
|
*/

const selectUserContainer = () => createSelector(
    selectUserContainerDomain(),
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

export default selectUserContainer;
export {
    selectUserContainerDomain,
};
