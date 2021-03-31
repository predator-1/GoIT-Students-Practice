// Напишите функцию
// makeCounter() - которая возвращает обект счетчик
// у которого есть методы
// increment() - увеличить на 1
// decrement() - уменьшить на 1
// reset() - сбросить счетчик на 0
// show() - вывести текущее значение в консоль

const makeCounter = () => {
  let count = 0;
  return {
    increment() {
      count += 1;
    },
    decrement() {
      count -= 1;
    },
    reset() {
      count = 0;
    },
    show() {
      console.log(count);
    },
  };
};

const counter = makeCounter();

counter.increment();
counter.show();
counter.decrement();
counter.show();
counter.increment();
counter.reset();
counter.show();
