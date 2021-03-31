/**
 * Напиши функцию getAllPropValues(propName)
 * которая вернет все значения заданного
 * свойства
 * Например getAllPropValues('name') возвращает ['Asus', 'Huawei', 'HP', 'Dell']
 * getAllPropValues('category') возвращает []
 */

const products = [
  { name: 'Asus', price: 1300, quantity: 4 },
  { name: 'Huawei', price: 2700, quantity: 3 },
  { name: 'HP', price: 400, quantity: 7 },
  { name: 'Dell', price: 1200, quantity: 9 },
];

// const getAllPropValues = name => {
//   return products.reduce((acc, item) => {
//     if (item.hasOwnProperty(name)) acc.push(item[name]);

//     return acc;
//   }, []);
// };

const getAllPropValues = name => {
  const acc = [];
  products.forEach(item => {
    if (item.hasOwnProperty(name)) acc.push(item[name]);
  });
  return acc;
};

console.log(getAllPropValues('name'));
console.log(getAllPropValues('category'));
