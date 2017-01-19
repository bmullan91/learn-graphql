const express = require('express');
const expressGraphql = require('express-graphql');

const schema = require('./schema');

const app = express();

app.use('/graphql', expressGraphql({
  schema
}));

app.get('/', (req, res) => res.end('homepage'));

app.listen(Number(process.argv[2] || 8080), (err) => {
  if(err) {
    throw new Error(err);
  }
});
