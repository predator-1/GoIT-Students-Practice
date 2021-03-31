/**
 * Композиция - создание сложной функциональности за счет
 * объединения более простых функций. В некотором смысле,
 * композиция - это вложение функций, каждая из которых
 * передает свой результат в качестве входных данных для другой функции.
 */
// Напишите функцию compose
// Которая принимает несколько функций
// и возвращает функцию, принимающую число
// и применяющую к нему эти функции поочередно
// https://learn.javascript.ru/array-iteration

const add3 = n => n + 3;
const mult5 = n => n * 5;
const pow2 = n => n ** 2;

// const compose = function (...fns) {
//   return n => {
//     let acc = n;
//     for (const func of fns) {
//       acc = func(acc);
//     }
//     return acc;
//   };
// };

const compose = (...fnc) => {
  return n => fnc.reduceRight((acc, fn) => fn(acc), n);
};

// console.log(pow2(mult5(add3(5))));
const composed = compose(pow2, mult5, add3);
console.log(composed(5));
console.log(composed(3));
