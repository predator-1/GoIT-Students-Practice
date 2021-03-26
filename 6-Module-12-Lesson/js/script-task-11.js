// "На codewars задача попалась, как раз вроде по теме модуля.

//Нужно написать функцию которая возвращает массив содержащий не более
//N-раз каждое число, не изменяя порядка.

function deleteNth(arr, n) {
  const acc = {};
  const result = [];
  for (const item of arr) {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = 0;
    }
    acc[item]++;
    if (acc[item] <= n) {
      result.push(item);
    }
  }
  return result;
}

console.log(deleteNth([1, 1, 1, 1], 2)); // return [1,1]
console.log(deleteNth([20, 37, 20, 21], 1)); // return [20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // return [1, 1, 3, 3, 7, 2, 2, 2])

/*Как оставлять уникальные элементы уже знаем reduce or filter,
так же много информации как находить количество повторяющихся элементов
 массива, а как конкретно эту задачу решить не могу понять.

Что нужно для этой задачи? Что почитать? Или на что внимание обратить?"*/
