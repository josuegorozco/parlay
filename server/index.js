import express from 'express'; /* eslint-disable no-console, import/no-extraneous-dependencies */
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../build/webpack/webpack.config.dev';

console.log('config => ', JSON.stringify(config, null, 4));

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`);
    }
});
