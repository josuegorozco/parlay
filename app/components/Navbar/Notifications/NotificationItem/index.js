import React from 'react';
import classNames from 'classnames';
import Icon from '../../../Icon';

/*
|--------------------------------------------------------------------------
| NotificationItem
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const NotificationItem = ({ message, timestamp, icon = 'event_note' }) => (
    <li
        className={classNames(
            'list-group-item',
            'dark-white',
            'text-color',
            'box-shadow-z0',
            'b',
        )}
    >
        <span
            className={classNames(
                'pull-left',
                'm-r',
            )}
        >
            <Icon name={icon} />
        </span>
        <span
            className={classNames(
                'clear',
                'block',
            )}
        >
            {message}
            <small
                className={classNames(
                    'text-muted',
                    'block',
                )}
            >
                {timestamp}
            </small>
        </span>
    </li>
);

NotificationItem.propTypes = {
    message: React.PropTypes.string.isRequired,
    timestamp: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string,
};

export default NotificationItem;
