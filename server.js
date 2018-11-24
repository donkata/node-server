const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static('public'))

app.get('/', function(req, res) {
    console.log("GET From SERVER");
    res.send({title: 'Doncho dummy server'});
});

app.post('/', function(req, res) {
    console.log('post request', req.body);
    req.body = {}
    res.status(200).send("Successfully posted ingredient");
});

app.listen(PORT, () => console.log(`server run on port ${PORT}`));
