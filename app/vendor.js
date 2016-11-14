/*
|--------------------------------------------------------------------------
| Vendor libs
|--------------------------------------------------------------------------
|
| This file contains references to vendor libraries used in this project.
| All libraries referenced here will be written to vendor.js so they can be
| cached until one of them changes. This avoids users having to download a
| huge js file anytime a line of code changes.
|
| All other files that aren't referenced here will be bundled into main.js
| for the production build.
|
*/

/* eslint-disable no-unused-vars, import/first */

/*
|--------------------------------------------------------------------------
| jQuery
|--------------------------------------------------------------------------
|
| Initializes jquery for use throughout the app.
|
*/

import jQuery from 'jquery';

global.jQuery = jQuery;
global.$ = jQuery;

/*
|--------------------------------------------------------------------------
| Tether
|--------------------------------------------------------------------------
|
| Bootstrap 4 requires tether
|
*/

import tether from 'tether';

global.Tether = tether;

/*
|--------------------------------------------------------------------------
| Bootstrap
|--------------------------------------------------------------------------
|
| Init bootstrap
|
*/

require('bootstrap');
