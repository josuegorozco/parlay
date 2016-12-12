import React from 'react';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';

/*
|--------------------------------------------------------------------------
| NavDropdown
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const NavDropdown = props => (
    <li
        className={classNames(
            'nav-item',
            'dropdown',
        )}
    >
        <a
            data-toggle="dropdown"
            aria-expanded="false"
            className={classNames(
                'nav-link',
            )}
        >
            <FontAwesome name={props.icon} />
        </a>
        <div
            className={`dropdown-menu ${props.className}`}
        >
            {props.children}
        </div>
    </li>
);

NavDropdown.propTypes = {
    icon: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
};

export default NavDropdown;
