import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| NavDropdownToggle
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const NavDropdownToggle = ({ className = '', children }) => (
    <a
        data-toggle="dropdown"
        aria-expanded="false"
        className={classNames(
            'nav-link',
            className,
        )}
    >
        {children}
    </a>
);

NavDropdownToggle.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
};

export default NavDropdownToggle;
