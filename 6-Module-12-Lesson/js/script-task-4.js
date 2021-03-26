/**
 * Найдите цену Apple
 */

const phones = [
  { name: 'Huawei', price: 800 },
  { name: 'Apple', price: 1000 },
  { name: 'Samsung', price: 900 },
];

const costIndex = phones.findIndex(item => item.name === 'Apple1');
if (costIndex >= 0) {
  console.log(phones[costIndex].price);
}

// Дан массив со строками. Оставьте в нем только те строки,
// длина которых больше 5-ти символов.
const items = ['SAMSUNG', 'lg', 'ASUS', 'dell', 'BENQ'];
// console.log(items.filter(item => item.length > 30));
