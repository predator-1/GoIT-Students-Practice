/**
 * - letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает коллбек ф-цию callback
 * - greet(name) - коллбек принимающий имя и логирующий в консоль строку "Привет" + name
 */

const letMeSeeYourName = callback => {
  const name = prompt('What is ur name?');
  callback(name);
};

const greet = text => {
  console.log(`Hello ${text}!`);
};

letMeSeeYourName(greet);
