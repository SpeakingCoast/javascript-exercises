const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
  if (arr[0]) {
    return arr.reduce((acc, curr) => acc + curr);
  }
  else if (!arr[0]) {
    return 0;
  }
};

const multiply = function(arr) {
  return arr.reduce((num1, num2) => num1 * num2);
};

const power = function(a, b) {
	var result = 1;
  for (i = 0; i < b; i++) {
    result *= a;
  };
  return result;
};

const factorial = function(a) {
	var result = 1;
  for (let i = a; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
