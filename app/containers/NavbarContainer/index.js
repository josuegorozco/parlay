import React from 'react';
import { connect } from 'react-redux';
import selectNavbarContainer from './selectors';
import Navbar from '../../components/Navbar';

/*
|--------------------------------------------------------------------------
| NavbarContainer
|--------------------------------------------------------------------------
|
| Container index.js
|
*/

export class NavbarContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <Navbar />
        );
    }
}

const mapStateToProps = selectNavbarContainer();

/**
 * mapDispatchToProps
 *
 * @param dispatch
 * @returns {object}
 */
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
