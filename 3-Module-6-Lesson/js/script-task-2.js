// Spread
// Right order

const lion = { hasTail: true, legs: 4 };
const eagle = { canFly: true, legs: 2 };

const chimera = {
  ...lion,
  legs: 100,
};

console.log(chimera);
