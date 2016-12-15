import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import Icon from '../../../Icon';

/*
|--------------------------------------------------------------------------
| AppMenuItem
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const AppMenuItem = ({ label, icon, url, className }) => (
    <div
        className={classNames(
            'col-xs-4',
            className,
        )}
    >
        <Link
            to={url}
            className={classNames(
                'p-a',
                'block',
                'text-center',
            )}
        >
            <Icon
                name={icon}
                className={classNames(
                    'md-24',
                    'text-muted',
                    'm-v-sm',
                    { hidden: !icon },
                )}
            />
            <span
                className={classNames(
                    'block',
                    'appitem'
                )}
            >
                {label}
            </span>
        </Link>
    </div>
);

AppMenuItem.propTypes = {
    label: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
    url: React.PropTypes.string,
    className: React.PropTypes.string,
};

export default AppMenuItem;
