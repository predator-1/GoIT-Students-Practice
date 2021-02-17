/**
 * Create function that returns smallest value
 */

const min = function (val1, val2) {
  if (val1 >= val2) {
    return val2;
  }

  return val1;
};

console.log(min(1, 4));
console.log(min(4, -5));
console.log(min(-5, -5));
