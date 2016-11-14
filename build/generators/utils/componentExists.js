import fs from 'fs';

/*
|--------------------------------------------------------------------------
| componentExists
|--------------------------------------------------------------------------
|
| Check whether the given component exist in either the components or containers directory
|
*/

const pageComponents = fs.readdirSync('app/components');
const pageContainers = fs.readdirSync('app/containers');
const components = pageComponents.concat(pageContainers);

/**
 * componentExists
 *
 * @param comp
 * @returns {boolean}
 */
function componentExists(comp) {
    return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
