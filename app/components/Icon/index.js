import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| Icon
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const Icon = ({ name, className = '', iconType = 'material' }) => {
    const icon = iconType === 'material' ? (
        <i
            className={classNames(
                'material-icons',
                className,
            )}
        >
            {name}
        </i>
    ) : (
        <FontAwesome
            name={name}
            className={classNames(
                className,
            )}
        />
    );

    return icon;
};

Icon.propTypes = {
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    iconType: React.PropTypes.string,
};

export default Icon;
