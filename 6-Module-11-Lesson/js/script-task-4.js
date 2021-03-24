// Напишите функцию unique(arr),
// которая возвращает массив,
// содержащий только уникальные элементы arr

const notUniqueNumbers = [1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 5];

// const unique = arr =>
//   arr.reduce((acc, num) => {
//     if (!acc.includes(num)) {
//       acc.push(num);
//     }
//     return acc;
//   }, []);

const unique = arr => {
  return arr.filter((num, index, array) => array.indexOf(num) === index);
};

console.log(unique(notUniqueNumbers));
