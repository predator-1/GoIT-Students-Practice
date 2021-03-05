const cat = {
  name: 'Tom',
};

const dog = {
  voice: 'woof',
};

const cat2 = cat;

const newCat = {};
Object.assign(newCat, cat, dog);

cat.name = 'Jack';

console.log(newCat);
console.log(cat2);
