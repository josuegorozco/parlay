import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

/*
|--------------------------------------------------------------------------
| NavDropdownItem
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const NavDropdownItem = ({ label, url = '', className, children }) => (
    <Link
        to={url}
        className={classNames(
            'dropdown-item',
            className,
        )}
    >
        <span>{label}</span>
        {children}
    </Link>
);

NavDropdownItem.propTypes = {
    label: React.PropTypes.string.isRequired,
    url: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
};

export default NavDropdownItem;
