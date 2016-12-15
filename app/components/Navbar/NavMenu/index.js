import React from 'react';
import MenuList from './MenuList';
import MenuItem from './MenuItem';

/*
|--------------------------------------------------------------------------
| NavMenu
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const NavMenu = ({ menu }) => {
    const menuItems = menu.map(l => (
        <MenuItem
            key={l.id}
            label={l.label}
            url={l.url}
            className={l.className}
            icon={l.icon}
            iconClassName={l.iconClassName}
        />
    ));

    return (
        <MenuList>
            {menuItems}
        </MenuList>
    );
};

NavMenu.propTypes = {
    menu: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            label: React.PropTypes.string,
            url: React.PropTypes.string.isRequired,
            className: React.PropTypes.string,
            icon: React.PropTypes.string,
            iconClassName: React.PropTypes.string,
        })
    ),
};

export default NavMenu;
