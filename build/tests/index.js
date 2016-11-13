/*
|--------------------------------------------------------------------------
| Transpile tests
|--------------------------------------------------------------------------
|
| This file isn't transpiled, so we must use CommonJS and ES5. Register
| babel to transpile before our test run.
|
*/

require('babel-register')();

/*
|--------------------------------------------------------------------------
| Disable CSS
|--------------------------------------------------------------------------
|
| Turn off css specific features that webpack understands, but not mocha.
|
*/

require.extensions['.css'] = function disableCss() {};
