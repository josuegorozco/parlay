import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| Label
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const Label = ({ color = 'default', className, children }) => (
    <span
        className={classNames(
            'label',
            color,
            className,
        )}
    >
        {children}
    </span>
);

Label.propTypes = {
    color: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
};

export default Label;
