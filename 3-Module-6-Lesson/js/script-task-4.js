/**
 * Object clone
 */

const cat = {
  paws: 4,
  color: 'blue',
  name: 'Murka',
};

const catCopy = {
  ...cat,
};

cat.paws = 100;

console.log(cat);
console.log(catCopy);
