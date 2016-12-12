import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import { Link } from 'react-router';

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
            <FontAwesome
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
