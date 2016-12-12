import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

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
        <FontAwesome name="bars" />
    </a>
);

export default ToggleButton;
