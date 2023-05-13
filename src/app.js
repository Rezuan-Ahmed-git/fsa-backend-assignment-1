const express = require('express');
const controller = require('./controller');

const app = express();

app.get('/api/random-number', controller);

app.listen(4000, () => {
  console.log('Server is listening on PORT 4000');
});
