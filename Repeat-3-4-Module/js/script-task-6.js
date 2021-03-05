/**
 * Функция высшего порядка — функция, принимающая в качестве параметров другие
 *   функции или возвращающая функцию как результат.
 * Функция обратного вызова (callback) — это функция, которая передается другой функции
 *   в качестве аргумента и та, в свою очередь, вызывает переданную функцию.
 * Абстрагирование
 */

const printLog = message => {
  if (message === 'ok') {
    console.log("it's ok");
  } else if (message === 'wrong creds') {
    console.log("it's wrong creds");
  } else {
    console.log("it's error");
  }
};

const loginUser = function (login, password, callback) {
  if (login === password) {
    callback('ok');
  } else {
    callback('wrong creds');
  }
};

loginUser('123', '123', printLog);
loginUser('123', '321', printLog);
