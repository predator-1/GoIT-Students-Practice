// Опертор %
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

const total = 70;
const hours = Math.floor(total / 60);
const minutes = total % 60;

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);

console.log(hours);
console.log(minutes);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
