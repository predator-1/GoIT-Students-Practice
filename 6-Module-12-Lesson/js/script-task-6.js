/**
 * Создать массив из N элементов и запонить его значениями
 * { index: текущий_индекс }
 */

const array = Array(3);

const createArray = number => {
  return Array(number)
    .fill('')
    .map((_, i) => ({ idex: i }));
};

console.table(createArray(5));
