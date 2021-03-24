// Напишите функцию filterRange(arr, a, b),
// которая принимает массив arr,
// ищет в нём элементы между a и b
// и отдаёт массив этих элементов.
// Функция должна возвращать новый массив
// и не изменять исходный.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filterRange = (arr, a, b) => {
//   const result = [];

//   arr.forEach(num => {
//     if (num >= a && num <= b) {
//       result.push(num);
//     }
//   });

//   return result;
// };

const filterRange = (arr, a, b) => arr.filter(num => num >= a && num <= b);

console.log(filterRange(numbers, 3, 7));
console.log(numbers);
