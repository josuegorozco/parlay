import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import NavDropdown from '../NavDropdown';
import NavDropdownMenu from '../NavDropdownMenu';
import NavDropdownToggle from '../NavDropdownToggle';
import AppItem from './AppMenuItem';

/*
|--------------------------------------------------------------------------
| AppMenu
|--------------------------------------------------------------------------
|
| Generates App links
|
*/

const AppMenu = ({ menu }) => {
    const appItems = menu.map(a => (
        <AppItem
            key={a.id}
            label={a.label}
            icon={a.icon}
            url={a.url}
            className={a.className}
        />
    ));

    return (
        <NavDropdown>
            <NavDropdownToggle>
                <FontAwesome name="th" />
            </NavDropdownToggle>
            <NavDropdownMenu className="w-xl text-color pull-right p-a-0 dropdown-menu-scale">
                <div className={classNames('row', 'no-gutter', 'text-primary-hover')}>
                    {appItems}
                </div>
            </NavDropdownMenu>
        </NavDropdown>
    );
};

AppMenu.propTypes = {
    menu: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            label: React.PropTypes.string.isRequired,
            icon: React.PropTypes.string,
            className: React.PropTypes.string,
        })
    ),
};

export default AppMenu;
