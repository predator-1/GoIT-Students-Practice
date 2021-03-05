/**
 * Лексическое окружение (lexical environment) — внутренняя, закрытая от прямого доступа структура движка для хранения
 * в памяти таблицы (Environment Record) идентификаторов переменных и их значений,
 * а так же значение this и механизм для извлечения этих значений
 *
 * Замыкание (closure) — это связь между функцией и ее цепочкой областей видимости.
 */

const createCounter = function () {
  /*
   * Локальная переменная privateValue доступна только в замыкании.
   * Получить к ней доступ во внешнем коде невозможно.
   */
  let privateValue = 0;

  const increment = function () {
    privateValue += 1;
    console.log(privateValue);
  };

  return increment;
};

const counterA = createCounter();
counterA(); // 1
counterA(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3
