/**
 * Удалите повторы, оставив с самым низким price
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

const removeDublicates = items => {
  return items
    .sort((a, b) => a.price - b.price)
    .filter(
      (item, index, array) =>
        index === array.findIndex(a => a.name === item.name),
    );
};

console.table(removeDublicates([...phones]));
console.table(phones);
