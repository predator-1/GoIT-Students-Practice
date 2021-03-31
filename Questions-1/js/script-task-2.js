// Замыкания
// Напишите функцию для хранения скидки.
// Функция возвращает другую функцию,
// которая принимает сумму покупки
// и возвращает финальную сумму с сохранённой скидкой.

const applyDiscount = function (discount) {
  return function (price) {
    return price - (price * discount) / 100;
  };
};

const priceWithDiscount = (price, discount) => {
  return price - (price * discount) / 100;
};

const withBaseDiscount = applyDiscount(5);

console.log(withBaseDiscount(100));

const withSilverDiscount = applyDiscount(10);

console.log(withSilverDiscount(100));
