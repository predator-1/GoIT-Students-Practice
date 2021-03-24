// Напишите функцию getAverage(numbers),
// которая принимает массив чисел и возвращает среднее
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const getAverage = numbers => {
//   let accum = 0;

//   for (const num of numbers) {
//     accum += num;
//   }

//   return accum / numbers.length;
// };

const getAverage = numbers =>
  numbers.reduce((acc, num) => acc + num) / numbers.length;

console.log(getAverage(numbers));
