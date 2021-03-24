// Перемешивание
// Напишите функцию shuffle,
// которая принимает массив и возвращает новый,
// с теми же элементами, но в случайном порядке.

const numbers = [1, 2, 3, 4, 5, 6];

const shuffle = arr => {
  const randomCompare = () => {
    return Math.random() - 0.5;
    // 0.1 - 0.5 -
    // 0.6 - 0.5 +
  };

  const result = arr.slice();

  return result.sort(randomCompare);
};

console.log(shuffle(numbers));
console.log(shuffle(numbers));
console.log(shuffle(numbers));

console.log(numbers);
