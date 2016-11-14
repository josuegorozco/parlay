import express from 'express'; /* eslint-disable no-console */
import compression from 'compression';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

app.use(express.static('dist'));
app.use(compression());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`);
    }
});
