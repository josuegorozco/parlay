import express from 'express'; /* eslint-disable no-console, import/no-extraneous-dependencies */
import cors from 'cors';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../build/webpack/webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(cors());
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    silent: true,
    stats: 'errors-only'
}));

app.use(webpackHotMiddleware(compiler));

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
