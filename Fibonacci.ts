const fibonacci = (upto) => {
  if (isNaN(upto)) {
    return "Not a Number!";
  }
  if (upto == 0) {
    return [];
  }
  if (upto == 1) {
    return [0];
  } else if (upto == 2) {
    return [0, 1];
  } else {
    return "Not implemented!";
  }
};

module.exports = fibonacci;
