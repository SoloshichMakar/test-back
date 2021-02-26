import express from 'express';

const router = require('./src/endpoints/index');

const app = express();

app.use(router())

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});