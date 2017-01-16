const express = require('express');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/person/:input', (request, response) => {
    const input = isNaN(parseFloat(request.params.input)) ? 1 : parseFloat(request.params.input);
    response.send({ val1: input / 2, val2: input / 3 });
});

app.get('/facility/:val', (request, response) => {
    const val = isNaN(parseFloat(request.params.val)) ? 1 : parseFloat(request.params.val);
    response.send({ val3: val > 1000 ? 123456 : val, val4: val / 3 });
});

app.get('/exposure/:val', (request, response) => {
    const val = isNaN(parseFloat(request.params.val)) ? 1 : parseFloat(request.params.val);
    response.send({ val5: val * 5, });
});

app.listen(3030, () => {
    console.log('Express running!');
});