/**
 * Написать функцию которая определит массив
 * содеражщий только цифры
 */

const array1 = [2, 4, '1'];
const array2 = [2, 4, 1];

const isNumber = array => {
  return array.every(value => typeof value === 'number');
};

console.log(isNumber(array1));
console.log(isNumber(array2));
