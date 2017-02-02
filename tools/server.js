const express = require('express');
const path = require('path');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/generator', (request, response) => {
    response.sendFile(path.join(__dirname, '../dist/generator.html'));
});

app.get('/history', (request, response) => {
    response.sendFile(path.join(__dirname, '../dist/history.html'));
});

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.get(/.*\.jpg/, (request, response) => {
    response.sendFile(path.join(__dirname, '../dist/sharedImg.html'));
});

app.listen(3030, () => {
    console.log('Express running! at', 3030);
});

