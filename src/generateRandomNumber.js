function generateRandomNumber(start, end) {
  if (Number.isInteger(start) && Number.isInteger(end)) {
    return Math.floor(Math.random() * (end - start + 1) + start);
  } else {
    console.log('Invalid Input');
  }
}

module.exports = generateRandomNumber;
