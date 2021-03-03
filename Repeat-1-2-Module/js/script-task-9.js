/**
 * Функции. Аргументы и параметры
 * Псевдомассив arguments
 * Область видимости функции
 */

const sum = function (a, b) {
  // params
  console.log(arguments);
  return a + b;
};

// sum(3, 5); // arguments

let salt = 5;

const multi = function (a, b) {
  const salt = 0;
  return a * b * salt;
};

console.log(salt);

console.log(multi(2, 5));
