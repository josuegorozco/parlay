import React from 'react';
import classNames from 'classnames';
import Icon from '../../Icon';

/*
|--------------------------------------------------------------------------
| ToggleButton
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const ToggleButton = () => (
    <a
        data-toggle="collapse"
        data-target="#collapse"
        className={classNames(
            'navbar-item',
            'pull-right',
            'hidden-md-up',
            'm-a-0',
            'm-l',
        )}
    >
        <Icon name="more_vert" />
    </a>
);

export default ToggleButton;
