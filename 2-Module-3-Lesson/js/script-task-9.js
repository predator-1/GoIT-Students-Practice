// const names = ['Margo', 'Paul', 'Nik', 'Den'];

// console.log(
//   names.find(function (name) {
//     if (name.length === 3) {
//       return true;
//     }
//   }),
// );

const classMarks = [3, 2, 4, 5, 6];

// console.log(
//   classMarks.map(function (value) {
//     return value + 1;
//   }),
// );

console.log(
  classMarks.reduce(function (a, b) {
    return a + b;
  }),
);
