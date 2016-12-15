import React from 'react';
import { connect } from 'react-redux';
import { requestNavMenu } from './actions';
import selectNavMenuContainer from './selectors';
import NavMenu from '../../../components/Navbar/NavMenu';

/*
|--------------------------------------------------------------------------
| NavMenuContainer
|--------------------------------------------------------------------------
|
| Container index.js
|
*/

export class NavMenuContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
        requestNavMenu: React.PropTypes.func.isRequired,
    }

    componentWillMount() {
        this.props.requestNavMenu();
    }

    render() {
        return (
            <NavMenu {...this.props} />
        );
    }
}

const mapStateToProps = selectNavMenuContainer();

/**
 * mapDispatchToProps
 *
 * @param dispatch
 * @returns {object}
 */
function mapDispatchToProps(dispatch) {
    return {
        requestNavMenu: () => dispatch(requestNavMenu()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuContainer);
