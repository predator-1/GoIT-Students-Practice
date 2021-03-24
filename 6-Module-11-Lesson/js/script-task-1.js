// Дан массив с числами
// Напечатайте в консоль только четные
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const num of numbers) {
//   if (num % 2 === 0) console.log(num);
// }

// numbers.forEach(num => {
//   if (num % 2 === 0) console.log(num);
// });

numbers.filter(num => num % 2 === 0).forEach(num => console.log(num));
