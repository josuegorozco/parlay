import React from 'react';
import { connect } from 'react-redux';
import { requestNotifications } from './actions';
import selectNotificationsContainer from './selectors';
import Notifications from '../../../components/Navbar/Notifications';

/*
|--------------------------------------------------------------------------
| NotificationsContainer
|--------------------------------------------------------------------------
|
| Container index.js
|
*/

export class NotificationsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
        requestNotifications: React.PropTypes.func.isRequired,
    }

    componentWillMount() {
        this.props.requestNotifications();
    }

    render() {
        return (
            <Notifications {...this.props} />
        );
    }
}

const mapStateToProps = selectNotificationsContainer();

/**
 * mapDispatchToProps
 *
 * @param dispatch
 * @returns {object}
 */
function mapDispatchToProps(dispatch) {
    return {
        requestNotifications: () => dispatch(requestNotifications()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
