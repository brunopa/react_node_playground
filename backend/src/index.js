/*
const process = require('process');
const express = require('express')
const mongose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const app = express()
console.log('Conectando');

mongose.connect('mongodb+srv://root:senha123@cluster0-lh0q9.gcp.mongodb.net/test',
{
    useUnifiedTopology: true,
    useNewUrlParser: true  
})
console.log('Conectado');

app.use(cors());
app.use(express.json());
app.use(routes);

//app.listen(3333)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
module.exports = app;
*/
'use strict';

// [START gae_node_request_example]
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;