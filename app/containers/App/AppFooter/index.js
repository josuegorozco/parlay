import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| AppFooter
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const AppFooter = props => (
    <div
        className={classNames(
            'app-footer',
            'white',
            'dk',
            'pos-rtl',
        )}
    >
        {props.children}
    </div>
);

AppFooter.propTypes = {
    children: React.PropTypes.node,
};

export default AppFooter;
