/**
 * Числа и проверка на число
 */

let fakeNum = '4qwwe';

if (Number.isNaN(fakeNum)) {
  console.log('this is not a number');
} else {
  console.log('this is a number');
  let currentNum = Number.parseInt(fakeNum);
  currentNum += 1;
  console.log(currentNum);
}
