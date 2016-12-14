import React from 'react';
import { connect } from 'react-redux';
import selectUserContainer from './selectors';
import User from '../../../components/Navbar/User';

/*
|--------------------------------------------------------------------------
| UserContainer
|--------------------------------------------------------------------------
|
| Container index.js
|
*/

export class UserContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <User {...this.props} />
        );
    }
}

const mapStateToProps = selectUserContainer();

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

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
