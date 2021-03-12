/**
 * Bind
 *
 * Создайте метод counter который будет из this брать i и увеличивать его на
 *      единицу. После возвращать i.
 * Используйте bind чтобы установить переменной i разные значения
 *
 * Выведите результат в консоль
 */

let i = 666;

const counter = function (applier) {
  return function () {
    this.i += 1;
    this.i *= applier;
    return this.i;
  };
};

const counter1 = counter(2).bind({ i: 0 });
const counter2 = counter(3).bind({ i: 100 });

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
