import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| MenuList
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const MenuList = props => (
    <ul
        className={classNames(
            'nav',
            'navbar-nav',
            'pull-left',
            'nav-active-border',
            'b-primary',
        )}
    >
        {props.children}
    </ul>
);

MenuList.propTypes = {
    children: React.PropTypes.node,
};

export default MenuList;
