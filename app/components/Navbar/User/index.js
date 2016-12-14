import React from 'react';
import Avatar from '../../Avatar';
import Label from '../../Label';
import NavDropdown from '../NavDropdown';
import NavDropdownMenu from '../NavDropdownMenu';
import NavDropdownItem from '../NavDropdownItem';
import NavDropdownToggle from '../NavDropdownToggle';
import NavDropdownDivider from '../NavDropdownDivider';

/*
|--------------------------------------------------------------------------
| User
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const User = () => (
    <NavDropdown>
        <NavDropdownToggle className="dropdown-toggle clear">
            <Avatar onlineStatus="on" />
        </NavDropdownToggle>
        <NavDropdownMenu className="dropdown-menu pull-right dropdown-menu-scale">
            <NavDropdownItem label="Profile" url="/profile" />
            <NavDropdownItem label="Settings" url="/settings">
                <Label className="m-l-xs" color="primary">3/9</Label>
            </NavDropdownItem>
            <NavDropdownDivider />
            <NavDropdownItem label="Need help?" url="/help" />
            <NavDropdownDivider />
            <NavDropdownItem label="Sign out" url="/logout" />
        </NavDropdownMenu>
    </NavDropdown>
);

export default User;
