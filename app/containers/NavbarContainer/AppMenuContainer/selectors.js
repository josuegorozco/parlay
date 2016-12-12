import { createSelector } from 'reselect';

/*
|--------------------------------------------------------------------------
| Direct
|--------------------------------------------------------------------------
|
| Direct selector to the appMenuContainer state domain
|
*/

const selectAppMenuContainerDomain = () => state => state.get('appMenuContainer');

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
| Default selector used by AppMenuContainer
|
*/

const selectAppMenuContainer = () => createSelector(
    selectAppMenuContainerDomain(),
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

export default selectAppMenuContainer;
export {
    selectAppMenuContainerDomain,
};
