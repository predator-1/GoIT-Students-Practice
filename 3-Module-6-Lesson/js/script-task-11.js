const animal = {
  paws: 4,
  eyes: 2,
  tail: 1,
  secondTail: 0,
};

const animalClone = {
  ...animal,
};

animalClone.paws = 100;

console.log(animalClone);
console.log(animal);
