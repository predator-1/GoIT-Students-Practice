/**
 * Область видимости
 */
const array = [];

for (let i = 2; i <= 10; i += 1) {
  if (i % 2 === 0) {
    const number = i;
    array.push(number);
  }
}
