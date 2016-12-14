import React from 'react';
import classNames from 'classnames';
import profile from './profile.png';

/*
|--------------------------------------------------------------------------
| Avatar
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const Avatar = ({ img = profile, size = 32, onlineStatus = 'off', borderColor = 'b-white', displayLocation = 'left', showStatus = true }) => {
    const status = showStatus ? (
        <i
            className={classNames(
                onlineStatus,
                borderColor,
                displayLocation,
            )}
        />
    ) : null;

    return (
        <span
            className={classNames(
                'avatar',
                `w-${size}`,
            )}
        >
            <img src={img} role="presentation" alt="" />
            {status}
        </span>
    );
};

Avatar.propTypes = {
    img: React.PropTypes.node,
    size: React.PropTypes.string,
    borderColor: React.PropTypes.string,
    displayLocation: React.PropTypes.string,
    onlineStatus: React.PropTypes.string,
    showStatus: React.PropTypes.bool,
};

export default Avatar;
