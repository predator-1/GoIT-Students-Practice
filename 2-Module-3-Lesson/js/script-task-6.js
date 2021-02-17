/**
 * Sorting
 */

// const arrString = ['HTML', 'JavaScript', 'CSS'];

const arrNumber = [8, 6, 22, 99];

// console.log(
//   arrString.sort(function (a, b) {
//     if (a > b) {
//       return -1;
//     }
//     if (a < b) {
//       return 1;
//     }
//     return 0;
//   }),
// );

console.log(
  arrNumber.sort(function (a, b) {
    return b - a;
  }),
);
