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
import styles from './styles.scss';
import html5 from '../../assets/images/logos/html5.png';
import css3 from '../../assets/images/logos/css3.png';
import b4 from '../../assets/images/logos/bootstrap4.png';
import sass from '../../assets/images/logos/sass.png';
import react from '../../assets/images/logos/react.png';
import redux from '../../assets/images/logos/redux.png';
import nodejs from '../../assets/images/logos/nodejs.png';
import npm from '../../assets/images/logos/npm.png';
import express from '../../assets/images/logos/express.png';
import webpack from '../../assets/images/logos/webpack.png';
import mocha from '../../assets/images/logos/mocha.png';
import chai from '../../assets/images/logos/chai.png';
import karma from '../../assets/images/logos/karma.png';
import js from '../../assets/images/logos/js.jpg';
import eslint from '../../assets/images/logos/eslint.png';
import babel from '../../assets/images/logos/babel.png';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className={classNames('container-fluid', styles.page)}>
                <div className="jumbotron">
                    <h1>
                        React Boilerplate
                    </h1>
                    <p className="lead">
                        A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices.
                    </p>
                    <hr />
                    <p>
                        Build on the latest tech stacks:
                    </p>
                    <div className="container-fluid">
                        <div className="row v-s inline">
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={b4} alt="Bootstrap 4" className="w-56" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={react} alt="React" className="w-56" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={redux} alt="Redux" className="w-56" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={html5} alt="HTML5" className="w-56" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={css3} alt="CSS 3" className="w-56" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={sass} alt="SASS" className="w-56" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={webpack} alt="Webpack" className="w-56" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={js} alt="Javascript" className="w-56" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={nodejs} alt="Nodejs" className="w-xs" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={npm} alt="Nodejs" className="w-xs" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={express} alt="Express" className="w-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs" />
                        </div>
                    </div>
                    <p className="m-t-md">
                        Deliver high quality code with:
                    </p>
                    <div className="container-fluid">
                        <div className="row v-s inline">
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={eslint} alt="Express" className="w-56" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={mocha} alt="Mocha" className="w-56" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={chai} alt="Mocha" className="w-56" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={karma} alt="Karma" className="w-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        <img src={babel} alt="Express" className="w-xs" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        Sinon.JS
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        expect
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs">
                                <div className="media">
                                    <div className="media-middle">
                                        enzyme
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
