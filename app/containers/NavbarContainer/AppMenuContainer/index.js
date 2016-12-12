import React from 'react';
import { connect } from 'react-redux';
import selectAppMenuContainer from './selectors';
import AppMenu from '../../../components/Navbar/AppMenu';

/*
|--------------------------------------------------------------------------
| AppMenuContainer
|--------------------------------------------------------------------------
|
| Container index.js
|
*/

export class AppMenuContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <AppMenu {...this.props} />
        );
    }
}

const mapStateToProps = selectAppMenuContainer();

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

export default connect(mapStateToProps, mapDispatchToProps)(AppMenuContainer);
