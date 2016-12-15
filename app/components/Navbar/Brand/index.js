/* eslint-disable no-underscore-dangle */
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import logo from './logo.png';

/*
|--------------------------------------------------------------------------
| Brand
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const Brand = () => (
    <Link
        to="/"
        className={classNames(
            'navbar-brand',
            'primary',
        )}
    >
        <img src={logo} width="24" height="24" alt="" />
        <span
            className={classNames(
                'hidden-folded',
                'inline',
                'v-m',
            )}
        >
            Parlay
            <span
                className={classNames(
                    'text-xs',
                    'text-muted',
                    '_300',
                    'block',
                    'm-t-xs',
                    'tagline',
                )}
            >
                Demo site.
            </span>
        </span>
    </Link>
);

export default Brand;
