/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.scss';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className={classNames('container', styles.page)}>
                <div className="jumbotron">
                    <h1>404 <FormattedMessage {...messages.header} /></h1>
                    <hr />
                    <p className="lead">
                        Oops. The page was not found.
                    </p>
                </div>
            </div>
        );
    }
}
