import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/Footer';

/*
|--------------------------------------------------------------------------
| FooterContainer
|--------------------------------------------------------------------------
|
| Container index.js
|
*/

export class FooterContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <Footer />
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

export default connect(mapDispatchToProps)(FooterContainer);
