const animal = {
  paws: 4,
  eyes: 2,
  tail: 1,
  secondTail: 0,
};

if (animal.hasOwnProperty('eyes')) {
  console.log(animal['eyes']);
}

// console.log(keys.includes('secondTail'));
