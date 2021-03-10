/**
 * Callback
 */
// "Не пойму этого примера из конспекта
const repeat = function (n, action, callback) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
  callback();
};

const labels = [];

repeat(5, value => {
  labels.push(`Label ${value + 1}`);
});

console.log(labels); // [""Label 1"", ""Label 2"", ""Label 3"", ""Label 4"", ""Label 5""]

// repeat - функция высшего порядка и принимает на параметр action аргумент, который
// является функцией.
// Если, я правильно думаю, то value - параметр функции, но что и откуда в него прилетает?
// По результату

//в value изначально лежит 0. Или я не туда думаю?"
