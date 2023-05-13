const express = require('express');
const generateRandomNumber = require('./generateRandomNumber');

const app = express();

app.get('/api/random-number', (req, res) => {
  const startValue = parseInt(req.query.start);
  const endValue = parseInt(req.query.end);
  try {
    res.json({
      startValue,
      endValue,
      randomNumber: generateRandomNumber(startValue, endValue),
    });
  } catch {
    res.status(422).json({ message: 'Invalid query param' });
  }
});

app.listen(4000, () => {
  console.log('Server is listening on PORT 4000');
});
