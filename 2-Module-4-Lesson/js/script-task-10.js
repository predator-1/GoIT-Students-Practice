const medalsReverse = [
  ['Country', 'Ukraine', 'Canada', 'USA'],
  ['Hokey', 1, 10, 6],
  ['Football', 5, 2, 1],
  ['Volleyball', 3, 4, 2],
];
let count = 0;
let tableLine = '';
let totalLength = 1;

while (count < totalLength) {
  for (let i = 0; i < medalsReverse.length; i += 1) {
    let newLine = String(medalsReverse[i][count]).padStart(10, ' ');
    tableLine += ' ' + newLine;
    totalLength = medalsReverse[i].length;
  }
  count += 1;
  console.log(tableLine);
  tableLine = '';
}
