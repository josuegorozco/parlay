import 'babel-polyfill';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

/*
|--------------------------------------------------------------------------
| chai-enzyme
|--------------------------------------------------------------------------
|
| If we need to use Chai, we'll have already chaiEnzyme loaded
|
*/

chai.use(chaiEnzyme());

/*
|--------------------------------------------------------------------------
| Code coverage
|--------------------------------------------------------------------------
|
| Include all .js files under `app`, except app.js, reducers.js, and routes.js.
|
*/
const context = require.context('../../app', true, /^^((?!(app|reducers|routes)).)*\.js$/);
context.keys().forEach(context);
