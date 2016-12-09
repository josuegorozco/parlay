import React from 'react';
import styles from './styles.scss';

/*
|--------------------------------------------------------------------------
| Navbar
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

function Navbar({ topics }) {
    return (
        <div className={styles.navbar}>
            Navbar - with {topics.length} topics.
        </div>
    );
}

Navbar.propTypes = {
    topics: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            descriptin: React.PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Navbar;
