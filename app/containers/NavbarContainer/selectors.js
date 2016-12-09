import { createSelector } from 'reselect';

/*
|--------------------------------------------------------------------------
| Direct
|--------------------------------------------------------------------------
|
| Direct selector to the navbarContainer state domain
|
*/

const selectNavbarContainerDomain = () => state => state.get('navbarContainer');

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
| Default selector used by NavbarContainer
|
*/

const selectNavbarContainer = () => createSelector(
    selectNavbarContainerDomain(),
    substate => substate.toJS()
);

/*
|--------------------------------------------------------------------------
| Export default
|--------------------------------------------------------------------------
|
| Default / final exports
|
*/

export default selectNavbarContainer;
export {
    selectNavbarContainerDomain,
};
