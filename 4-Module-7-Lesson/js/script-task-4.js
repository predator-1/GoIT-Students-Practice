/**
 *
 * - Выполните рефакторинг функции makeDishWithShef(shefName, dish) так,
 *      чтобы не нужно было каждый раз передавать имя шефа.
 * - Напишите функцию makeShef(shefName), которая возвращает другую
 *      функцию makeDish(dish), помнящую имя шефа при её вызове.
 */

const makeChef = function (chefName) {
  return dish => console.log(`Шеф ${chefName} готовит ${dish}`);
};

const polyCook = makeChef('Polly');
const mangoCook = makeChef('Mango');

polyCook('пирожок');
polyCook('чай');

mangoCook('тортик');
mangoCook('кофе');
