const positiveNums = [4, 6, 7, 3, 9];
const positiveAndNegativeNums = [4, -6, -7, -3, 9];
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
console.log(positiveNums.every(num => num > 0));
console.log(positiveAndNegativeNums.every(num => num > 0));

// Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
console.log(positiveNums.some(num => num < 0));
console.log(positiveAndNegativeNums.some(num => num < 0));

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
console.log(positiveNums.filter(num => num < 0).length);
console.log(positiveAndNegativeNums.filter(num => num < 0).length);

console.log(positiveNums.reduce((acc, item) => (item < 0 ? ++acc : acc), 0));
console.log(
  positiveAndNegativeNums.reduce(
    (acc, item) => (item < 0 ? (acc += 1) : acc),
    0,
  ),
);
