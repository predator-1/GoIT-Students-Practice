/**
 * - makeProduct(name, price, callback) - принимает имя и цену товара, а также колбек.
 *         Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство
 *         id и вызывает колбек передавая ему созданный обьект.
 * - showProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
 */

const makeProductFactory = () => {
  let counter = 0;
  return (name, price, callback) => {
    counter++;
    const goods = {
      name,
      price,
      id: counter,
    };
    callback(goods);
  };
};

const showProduct = goods => {
  console.log(goods);
};

const makeProduct = makeProductFactory();
const makeProduct2 = makeProductFactory();

makeProduct('apple', 100, showProduct);
makeProduct('pine', 400, showProduct);
makeProduct('chilly', 200, showProduct);
makeProduct('orange', 60, showProduct);
makeProduct2('orange', 60, showProduct);
