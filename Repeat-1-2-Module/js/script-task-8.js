/**
 * Массивы: литерал массива, элементы, индексация, length
 * split (и join), indexOf и includes, push и pop, slice и
  splice, concat
 */

const print = array => {
  if (array && array.length) {
    for (let i = 0; i < array.length; i += 1) {
      console.log(array[i]);
    }
  } else {
    console.log('error');
  }
};

// print([1, 2, 3]);

const array1 = [1, 2, 3];

const array2 = array1;
array1.push(4);
console.log(array1);
console.log(array2);
