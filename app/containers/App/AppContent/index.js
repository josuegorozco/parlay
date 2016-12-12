import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| AppContent
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const AppContent = props => (
    <div
        id="content"
        role="main"
        className={classNames('app-content')}
    >
        {props.children}
    </div>
);

AppContent.propTypes = {
    children: React.PropTypes.node,
};

export default AppContent;
