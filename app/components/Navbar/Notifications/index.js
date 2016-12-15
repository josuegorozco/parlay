import React from 'react';
import classNames from 'classnames';
import Icon from '../../Icon';
import NavDropdown from '../NavDropdown';
import NavDropdownMenu from '../NavDropdownMenu';
import NavDropdownToggle from '../NavDropdownToggle';
import NotificationsList from './NotificationsList';
import NotificationItem from './NotificationItem';

/*
|--------------------------------------------------------------------------
| Notifications
|--------------------------------------------------------------------------
|
| ES6 React Component.
|
*/

class Notifications extends React.Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
        notifications: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            img: React.PropTypes.string.isRequired,
            message: React.PropTypes.string.isRequired,
            timestamp: React.PropTypes.string.isRequired,
        })),
    };

    render() {
        const notifications = this.props.notifications.map(n => (
            <NotificationItem
                key={n.id}
                img={n.img}
                message={n.message}
                timestamp={n.timestamp}
                icon={n.icon}
            />
        ));

        return (
            <NavDropdown>
                <NavDropdownToggle>
                    <Icon name="notifications_none" />
                </NavDropdownToggle>
                <NavDropdownMenu
                    className={classNames(
                        'pull-right',
                        'w-xl',
                        'animated',
                        'fadeInUp',
                        'no-bg',
                        'no-border',
                        'no-shadow',
                        'r-n-64',
                    )}
                >
                    <NotificationsList>
                        {notifications}
                    </NotificationsList>
                </NavDropdownMenu>
            </NavDropdown>
        );
    }
}

export default Notifications;
