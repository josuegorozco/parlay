import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| NotificationsList
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const NotificationsList = props => (
    <div
        className={classNames(
            'scrollable',
        )}
    >
        <ul
            className={classNames(
                'list-group',
                'list-group-gap',
                'm-a-0',
            )}
        >
            {props.children}
        </ul>
    </div>
);

NotificationsList.propTypes = {
    children: React.PropTypes.node,
};

export default NotificationsList;
