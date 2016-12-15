import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import Icon from '../../../Icon';

/*
|--------------------------------------------------------------------------
| MenuItem
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const MenuItem = ({ label, url, icon = null, iconClassName = '', className = '' }) => {
    const labelNode = label ? (
        <span
            className={classNames(
                'nav-text',
                className,
            )}
        >
            {label}
        </span>
    ) : null;

    const iconNode = icon ? (
        <Icon name={icon} className={iconClassName} />
    ) : null;

    return (
        <li
            className={classNames(
                'nav-item',
            )}
        >
            <Link
                to={url}
                className={classNames(
                    'nav-link',
                )}
            >
                {iconNode}
                {labelNode}
            </Link>
        </li>
    );
};

MenuItem.propTypes = {
    label: React.PropTypes.string,
    url: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string,
    iconClassName: React.PropTypes.string,
    className: React.PropTypes.string,
};

export default MenuItem;
