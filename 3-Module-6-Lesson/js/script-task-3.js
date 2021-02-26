/**
 * Sum
 */

const sum = (num, ...numbers) => {
  let total = num;
  for (let num of numbers) {
    total += num;
  }
  return total;
};

console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(1, 2, 3, 5, 6));
console.log(sum(1, 122, 2, 3, 5, 6));
