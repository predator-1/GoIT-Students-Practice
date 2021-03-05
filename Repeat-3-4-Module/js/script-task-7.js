/**
 * Стек — структура данных, которая работает по принципу последним
 * пришёл — первым вышел (LIFO - Last In, First Out).
 * Последнее, что вы добавили в стек, будет удалено из него первым,
 * то есть можно добавить или удалить элементы только из верхушки стека.
 */

// const func1 = function () {
//   console.log('func1');
// };

// const func2 = function () {
//   func1();
//   console.log('func2');
// };

// const func3 = function () {
//   func2();
//   console.log('func3');
// };

// func3();

let currentNum;

const func = num => {
  // console.log(num);
  num++;
  func(num);
};

func(0);
