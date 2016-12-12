import React from 'react';
import classNames from 'classnames';
import NavDropdown from '../NavDropdown';
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
        <NavDropdown icon="th" className="w-xl text-color pull-right p-a-0 dropdown-menu-scale">
            <div className={classNames('row', 'no-gutter', 'text-primary-hover')}>
                {appItems}
            </div>
        </NavDropdown>
    );
};

AppMenu.propTypes = {
    menu: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            label: React.PropTypes.string.isRequired,
            icon: React.PropTypes.string,
        })
    ),
};

export default AppMenu;
