var calc = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    if (b != 0) {
      return a / b;
    } else {
      // var msg = "Can't divide it by Zero"
      // console.log(msg);
      return 0;
    }
  },
  multiply: function (a, b) {
    return a * b;
  },
};

// let c = calc.add(2, 3);
// console.log(c);

export { calc };
