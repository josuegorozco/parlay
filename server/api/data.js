import jsf from 'json-schema-faker';
import { schema } from './schema';
import fs from 'fs';
import chalk from 'chalk';

/*
|--------------------------------------------------------------------------
| Mock Data
|--------------------------------------------------------------------------
|
| This script generates mock data for local development
|
*/

const json = JSON.stringify(jsf(schema));

fs.writeFile('./server/api/db.json', json, error => {
    if (error) {
        console.log(chalk.red(error));
        return;
    }

    console.log(chalk.green('Mock data generated'));
});
