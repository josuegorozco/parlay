import express from 'express'; /* eslint-disable no-console */
import cors from 'cors';
import path from 'path';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(cors());
app.use(compression());
app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
});
