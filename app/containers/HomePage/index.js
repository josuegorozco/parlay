/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import styles from './styles.scss';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className={classNames('container-fluid', styles.page)}>
                <div className="jumbotron dker">
                    <h1>
                        <FontAwesome
                            className={styles.icoHome}
                            name="home"
                        />
                        Home Page
                    </h1>
                    <p className="lead">
                        This is a sample page.
                    </p>
                    <hr />
                    <p>
                        Sample paragraph here...
                    </p>
                    <p className="lead">
                        <button className="md-btn md-raised m-b-sm p-x success">Learn More</button>
                    </p>
                </div>
            </div>
        );
    }
}
