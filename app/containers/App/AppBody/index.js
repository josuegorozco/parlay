import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| AppBody
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const AppBody = props => (
    <div
        id="view"
        className={classNames(
            'app-body',
            'p-b-xlg',
        )}
    >
        {props.children}
    </div>
);

AppBody.propTypes = {
    children: React.PropTypes.node,
};

export default AppBody;
