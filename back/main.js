let express = require('express');
let request = require('request-promise');
let fs = require('fs');
let bodyParser = require('body-parser');
let cors = require('cors')
// let session = require('cookie-session');

const network = 'ropsten'
const apikey = 'ZBdWAhV0ueDDWy2hESCzvicXXcruaa4m'
const rocksideURL = 'https://api.rockside.io/ethereum/'

let app = express();
app.use(bodyParser.json())
app.use(cors())

app.post('/identities', async function(req, res) {
  let options = {
    method: 'POST',
    uri: rocksideURL + network + '/identities?apikey=' + apikey
  };

  console.log(options);
  let response = await request(options)

  res.send(response)
});

app.get('/identities', async function(req, res) {
  let options = {
    method: 'GET',
    uri: rocksideURL + network + '/identities?apikey=' + apikey
  };
  let response = await request(options)

  res.send(response)
});

app.post('/transaction', async function(req, res) {
  let body = {}
  body.from = req.body.from
  body.to = req.body.to
  body.value = req.body.value
  body.data = req.body.data

  console.log(body);

  let options = {
    method: 'POST',
    uri: rocksideURL + network + '/transaction?apikey=' + apikey,
    body: body,
    json: true
  };

  let response = await request(options)
  res.send(response)
});

app.post('/transfer', async function(req, res) {
  let body = {}
  body.from = req.body.from
  body.to = req.body.erc20

  let amount = req.body.amount
  amount = parseInt(amount, 10).toString(16)
  amount = "0".repeat(64 - amount.length) + amount

  body.data = '0xa9059cbb' + '000000000000000000000000' + req.body.to.slice(2) + amount;

  let options = {
    method: 'POST',
    uri: rocksideURL + network + '/transaction?apikey=' + apikey,
    body: body,
    json: true
  };

  let response = await request(options)
  res.send(response)
});

app.post('/balanceOf', async function(req, res) {
  let body = {}
  body.id = 1
  body.jsonrpc = "2.0"
  body.method = "eth_call"

  let paramTx = {}
  paramTx.to = req.body.erc20
  paramTx.data = '0x70a08231' + '000000000000000000000000' + req.body.from.slice(2)

  body.params = []
  body.params.push(paramTx)
  body.params.push("pending")

  let options = {
    method: 'POST',
    uri: rocksideURL + network + '/jsonrpc?apikey=' + apikey,
    body: body,
    json: true
  };

  let response = await request(options)

  let amount = parseInt(response.result)

  res.send({
    amount: amount
  })
});

app.post('/balance', async function(req, res) {
  let body = {}
  body.id = 1
  body.jsonrpc = "2.0"
  body.method = "eth_getBalance"

  body.params = []
  body.params.push(req.body.from)
  body.params.push("pending")

  let options = {
    method: 'POST',
    uri: rocksideURL + network + '/jsonrpc?apikey=' + apikey,
    body: body,
    json: true
  };

  let response = await request(options)

  let amount = parseInt(response.result)

  res.send({
    amount: amount
  })
});

app.post('/getWinner', async function(req, res) {
  let body = {}
  body.id = 1
  body.jsonrpc = "2.0"
  body.method = "eth_call"

  let paramTx = {}
  paramTx.to = req.body.flag
  paramTx.data = '0x8e7ea5b2'
console.log(paramTx);
  body.params = []
  body.params.push(paramTx)
  body.params.push("pending")
  console.log(body);

  let options = {
    method: 'POST',
    uri: rocksideURL + network + '/jsonrpc?apikey=' + apikey,
    body: body,
    json: true
  };
  // console.log(options);

  let response = await request(options)
  console.log(response);
  res.send({
    winner: '0x' + response.result.slice(26)
  })
});

app.post('/capture', async function(req, res) {
  let body = {}
  body.from = req.body.from
  body.to = req.body.flag
  body.data = '0xd4a3e9d7'

  let options = {
    method: 'POST',
    uri: rocksideURL + network + '/transaction?apikey=' + apikey,
    body: body,
    json: true
  };

  let response = await request(options)
  res.send(response)
});

app.listen(2000);
