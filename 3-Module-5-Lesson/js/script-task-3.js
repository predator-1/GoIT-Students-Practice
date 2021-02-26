/**
 * Func that returns total price from array by name
 */

const calcTotalPrice = (stones, stoneName) => {
  if (!stones || (stones && !stones.length)) {
    return 0;
  }

  if (!stoneName) {
    return 0;
  }

  let currentStone;

  for (let stone of stones) {
    if (stone.name === stoneName) {
      currentStone = stone;
      break;
    }
  }

  if (!currentStone) {
    return 0;
  }

  return currentStone.price * currentStone.quantity;
};

const stones = [
  { name: 'Emerald', price: 1300, quantity: 4 }, // Изумруд
  { name: 'Diamond', price: 2700, quantity: 3 }, // Бриллиант
  { name: 'Sapphire', price: 400, quantity: 7 }, // Сапфир
  { name: 'Crushed stone', price: 200, quantity: 2 }, // Щебень
];

console.log(calcTotalPrice(stones, 'Diamond'));
console.log(calcTotalPrice(stones, 'Crushed stone'));
console.log(calcTotalPrice(stones, 'Emerald'));
console.log(calcTotalPrice(stones, 'Sapphire'));
console.log(calcTotalPrice(null, 'Sapphire'));

/*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
Создать функцию которая будет выводить общую цену за все камни по названию камня
например calcTotalPrice(stonesObject, 'emerald') выведет в консоль 5200.
Подумайте что может пойти не так во время выполнения вышей функции и выведите
в консоль ошибки.

const calcTotalPrice = (stones, stoneName) => {
  console.log('not implemented');
};

const stonesObject = {
  emerald: { price: 1300, quantity: 4 },
  diamond: { price: 2700, quantity: 3 },
  sapphire: { price: 400, quantity: 7 },
  crushedStone: { price: 200, quantity: 2 },
};

console.log(stonesObject, 'emerald'); // 5200
*/
