/**
 * Создать объект person1 с полем name и getName которая вернет поле name
 * Создать объект person2 с полем name и присвоить person2.getName = person1.getName
 * Вывести результат обоих getName в консоль
 */

const person1 = {
  name: 'person1',
  getName() {
    return this.name;
  },
};

const person2 = {
  name: 'person2',
};

person2.getName = person1.getName;
// console.log(person1);

// console.log(person2);

// console.log(person1.getName());
// console.log(person2.getName());

console.log(person2.getName.call(person1));
