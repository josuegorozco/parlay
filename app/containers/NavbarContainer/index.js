import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import ToggleNav from '../../components/Navbar/ToggleNav';
import ToggleButton from '../../components/Navbar/ToggleButton';
import Brand from '../../components/Navbar/Brand';
import NavItems from '../../components/Navbar/NavItems';
import AppMenuContainer from './AppMenuContainer';
import NavMenuContainer from './NavMenuContainer';
import UserContainer from './UserContainer';
import NotificationsContainer from './NotificationsContainer';

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
                    <NotificationsContainer />
                    <UserContainer />
                </NavItems>
                <ToggleNav>
                    <NavMenuContainer />
                </ToggleNav>
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
