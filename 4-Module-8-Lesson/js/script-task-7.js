/**
 * Создайте функцию myPassword(password) которая будет хранить
 * внутри password и вернет объект с функцией guessPassword(testPassword), которая
 * вернет true если testPassword и password внутри функции совпадут
 * и false если не совпадут
 */

const myPassword = function (password) {
  return {
    originalPassword: password,
    guessPassword(testPassword) {
      return password === testPassword;
    },
  };
};

const testMyPassword = myPassword('myPass');
console.log(testMyPassword.guessPassword('gwegwegw'));
console.log(testMyPassword.guessPassword('myPass'));
console.log(testMyPassword.originalPassword);
