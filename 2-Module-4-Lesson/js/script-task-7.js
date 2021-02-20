//Arrow refactoring

const checkNumbers = (a, b) =>
  a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;

const mult = (x, y, z) => x * y * z;

console.log(mult(1, 2, 3));
console.log(checkNumbers(4, 5));
