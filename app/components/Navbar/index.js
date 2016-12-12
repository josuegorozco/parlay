import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| Navbar
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const Navbar = props => (
    <div className={classNames('navbar')}>
        {props.children}
    </div>
);

Navbar.propTypes = {
    children: React.PropTypes.node,
};

export default Navbar;
