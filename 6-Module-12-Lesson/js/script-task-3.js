/**
 * Найдите елемент с самой большой ценой price
 * Найдите самый большой price
 */

const phones = [
  { name: 'Huawei', price: 800 },
  { name: 'Apple', price: 1000 },
  { name: 'Samsung', price: 900 },
  { name: 'Apple', price: 1100 },
  { name: 'Samsung', price: 700 },
  { name: 'Apple', price: 800 },
  { name: 'Huawei', price: 950 },
  { name: 'Samsung', price: 1000 },
  { name: 'Huawei', price: 650 },
];

const getItemWithMaxPrice = items => {
  // let maxItem = items[0];
  // items.forEach(item => {
  //   if (item.price > maxItem.price) {
  //     maxItem = item;
  //   }
  // });
  // return maxItem;
  return items.reduce((acc, item) => (item.price > acc.price ? item : acc));
};

// console.log(getItemWithMaxPrice(phones));

const getMaxPrice = items => {
  return items.reduce((acc, item) => {
    if (acc < item.price) {
      return item.price;
    }
    return acc;
  }, 0);
};
// console.log(getMaxPrice(phones));

const items = [1, 2, 3];

console.log(items.reduce((acc, item) => acc * item));

const getAllPrice = items => {
  return items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
};
// console.log(getAllPrice(phones));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const getAverage = numbers =>
  numbers.reduce((acc, num) => acc + num) / numbers.length;

console.log(getAverage(numbers));
