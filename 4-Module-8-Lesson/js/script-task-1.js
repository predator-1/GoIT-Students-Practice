/**
 * Создать фабрику объектов которая вернет объект с полянми firstname, lastname и
 * функцией getInitials() которая вернет первую букву имя + первую букву фамилии
 * вывести результат getInitials в консоль
 */

const getPerson = function (firstname, lastname) {
  return {
    firstname,
    lastname,
    getInitials() {
      return `${this.firstname[0]}${this.lastname[0]}`;
    },
  };
};

const person1 = getPerson('Anna', 'Petrova');
const person2 = getPerson('Inna', 'Sidorova');

console.log(person1.getInitials());
console.log(person2.getInitials());
console.log(person1.getInitials.bind(person2)());
