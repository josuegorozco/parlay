import { createSelector } from 'reselect';

/*
|--------------------------------------------------------------------------
| Direct
|--------------------------------------------------------------------------
|
| Direct selector to the navMenuContainer state domain
|
*/

const selectNavMenuContainerDomain = () => state => state.get('navMenuContainer');

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
| Default selector used by NavMenuContainer
|
*/

const selectNavMenuContainer = () => createSelector(
    selectNavMenuContainerDomain(),
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

export default selectNavMenuContainer;
export {
    selectNavMenuContainerDomain,
};
