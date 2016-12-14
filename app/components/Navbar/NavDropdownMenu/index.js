import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| NavDropdownMenu
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const NavDropdownMenu = ({ className = '', children }) => (
    <div
        className={classNames(
            'dropdown-menu',
            className,
        )}
    >
        {children}
    </div>
);

NavDropdownMenu.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
};

export default NavDropdownMenu;
