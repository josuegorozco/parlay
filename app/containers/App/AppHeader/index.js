import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| AppHeader
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const AppHeader = props => (
    <div
        className={classNames(
            'app-header',
            'navbar-md',
            'white',
            'box-shadow-z4',
        )}
    >
        {props.children}
    </div>
);

AppHeader.propTypes = {
    children: React.PropTypes.node,
};

export default AppHeader;
