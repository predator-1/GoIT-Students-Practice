/**
 * This calculator
 */

const calculator = {
  first: 0,
  second: 0,
  read(a, b) {
    this.first = a;
    this.second = b;
  },
  mult() {
    return this.first * this.second;
  },
  sum() {
    return this.first + this.second;
  },
};

calculator.read(3, 5);
console.log(calculator.mult());
console.log(calculator.sum());
console.log('-------------------');
calculator.read(1, 2);
console.log(calculator.mult());
console.log(calculator.sum());
console.log('-------------------');
calculator.read(4, 8);
console.log(calculator.mult());
console.log(calculator.sum());

calculator.first = 2;
console.log(calculator.mult());
console.log(calculator.sum());
