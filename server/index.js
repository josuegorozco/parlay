import express from 'express'; /* eslint-disable no-console, import/no-extraneous-dependencies */
import cors from 'cors';
import path from 'path';
import open from 'open';
import favicon from 'serve-favicon';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../build/webpack/webpack.config.dev.babel';

const port = 3000;
const app = express();
const compiler = webpack(config);
const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    silent: true,
    stats: 'errors-only',
});

app.use(cors());
app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.use(favicon(path.join(__dirname, '../app/favicon.ico')));

// ------------------------------------------------------
// Since webpackDevMiddleware uses memory-fs internally to store build
// artifacts, we use it instead
const fs = middleware.fileSystem;

app.get('*', (req, res) => {
    fs.readFile(path.join(__dirname, '../app/index.html'), (err, file) => {
        if (err) {
            res.sendStatus(404);
        } else {
            res.send(file.toString());
        }
    });
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`);
    }
});
