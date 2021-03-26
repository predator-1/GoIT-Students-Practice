// Выполнить сортировку массива названий мониторов
// в алфавитном и обратном алфавитном порядке.

const items = ['SAMSUNG', 'lg', 'ASUS', 'dell', 'BENQ'];
const items2 = ['Huawei', 'Apple', 'ASUS', 'dell', 'BENQ'];

const acsCompare = (prev, next) => {
  return prev.toLowerCase() > next.toLowerCase() ? 1 : -1;
};

const descCompare = (prev, next) => {
  return prev.toLowerCase() < next.toLowerCase() ? 1 : -1;
};

console.log(items.sort(acsCompare));
console.log(items.sort(descCompare));
console.log(items2.sort(acsCompare));
