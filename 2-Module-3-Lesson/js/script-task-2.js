//Array examples

//Table

const medals = [
  ['Country', 'Hokey', 'Football', 'Volleyball'],
  ['Ukraine', 1, 5, 3],
  ['Canada', 10, 2, 4],
  ['USA', 6, 1, 2],
];

for (const raw of medals) {
  let tableLine = '';
  for (const line of raw) {
    let newLine = String(line).padStart(10, ' ');
    tableLine += ' ' + newLine;
  }
  console.log(tableLine);
}

const medalsReverse = [
  ['Country', 'Ukraine', 'Canada', 'USA'],
  ['Hokey', 1, 10, 6],
  ['Football', 5, 2, 1],
  ['Volleyball', 3, 4, 2],
];
