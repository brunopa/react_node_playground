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
