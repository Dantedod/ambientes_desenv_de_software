var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

function soma(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}
function divi(a, b) {
    return a / b;
}


app.get('/', function (req, res) {
    res.send('Oi, mundo :-)');

});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
app.post('/soma', function (req, res) {
    const { a, b } = req.body;
    const result = soma(a, b)
    res.send('resultado ' + result + ".");


});
app.post('/sub', function (req, res) {
    const { a, b } = req.body;
    const result = sub(a, b)
    res.send('resultado ' + result + ".");


});
app.post('/multi', function (req, res) {
    const { a, b } = req.body;
    const result = multi(a, b)
    res.send('resultado ' + result + ".");


});
app.post('/divi', function (req, res) {
    const { a, b } = req.body;
    const result = divi(a, b)
    res.send('resultado ' + result + ".");


});
