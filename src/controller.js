const generateRandomNumber = require('./generateRandomNumber');

const controller = (req, res) => {
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
};

module.exports = controller;
