import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import ToggleButton from '../../components/Navbar/ToggleButton';
import Brand from '../../components/Navbar/Brand';
import NavItems from '../../components/Navbar/NavItems';
import AppMenuContainer from './AppMenuContainer';
import UserContainer from './UserContainer';

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
            <Navbar>
                <ToggleButton />
                <Brand />
                <NavItems>
                    <AppMenuContainer />
                    <UserContainer />
                </NavItems>
            </Navbar>
        );
    }
}


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

export default connect(mapDispatchToProps)(NavbarContainer);
