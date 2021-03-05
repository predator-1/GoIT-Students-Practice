/**
 * Object methods
 * keys values entries
 */

const car = {
  wheels: 4,
  steeringWheel: 1,
  exhaustPipe: 2,
  seetBelt: 5,
};

for (let prop in car) {
  console.log(prop);
}

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));
