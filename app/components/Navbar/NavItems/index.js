import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| NavItems
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const NavItems = props => (
    <ul
        className={classNames(
            'nav',
            'navbar-nav',
            'pull-right',
        )}
    >
        {props.children}
    </ul>
);

NavItems.propTypes = {
    children: React.PropTypes.node,
};

export default NavItems;
