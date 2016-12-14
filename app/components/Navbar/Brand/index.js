/* eslint-disable no-underscore-dangle */
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

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
