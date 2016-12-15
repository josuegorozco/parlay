import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| ToggleNav
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const ToggleNav = props => (
    <div
        id="collapse"
        aria-expanded="false"
        className={classNames(
            'navbar-toggleable-sm',
            'collapse',
        )}
    >
        {props.children}
    </div>
);

ToggleNav.propTypes = {
    children: React.PropTypes.node,
};

export default ToggleNav;
