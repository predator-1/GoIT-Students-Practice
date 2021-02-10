// Шаблонные строки и конкатенация строк. Методы строк.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

const name = 'Манго';
const age = 5;
const hobby = 'плавать';
// const messageConcat = ' Меня зовут ' + name + ', мне ' + age + hobby;
const messageSchema = ` Меня зовут ${name}, мне ${age} лет и я люблю ${hobby}`;

console.log(messageSchema[1]);
