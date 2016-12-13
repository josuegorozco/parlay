import React from 'react';
import { connect } from 'react-redux';
import { requestAppMenu } from './actions';
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
    static propTypes = {
        requestAppMenu: React.PropTypes.func.isRequired,
    }

    componentWillMount() {
        this.props.requestAppMenu();
    }

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
export function mapDispatchToProps(dispatch) {
    return {
        requestAppMenu: () => dispatch(requestAppMenu()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMenuContainer);
