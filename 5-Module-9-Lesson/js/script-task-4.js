/**
 * Создайте конструтор объекта User который будет принимать
 * access и отнаследуйте от него Manager который будет принимать еще
 * documents.
 * Создайте 2 экзепляра и найдите среди них менеджера.
 */

const User = function (access) {
  this.access = access;
};

const Manager = function (access, documents) {
  User.call(this, access);
  this.documents = documents;
};

const user = new User(10);
const manager = new Manager(20, 3);

// console.log(user);
// console.log(manager);

const array = [user, manager];

for (const somePerson of array) {
  if (somePerson.hasOwnProperty('access')) {
    console.log(1, somePerson, 'this is user!!!!111');
  }
}
