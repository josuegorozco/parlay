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
    let icon;

    switch (iconType) {
        case 'fontawesome':
            icon = (
                <FontAwesome
                    name={name}
                    className={classNames(
                        className,
                    )}
                />
            );
            break;
        default:
            icon = (
                <i
                    className={classNames(
                        'material-icons',
                        className,
                    )}
                >
                    {name}
                </i>
            );
            break;
    }

    return icon;
};

Icon.propTypes = {
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    iconType: React.PropTypes.string,
};

export default Icon;
