// Есть функция changeSalary
// и пользователи
// напишите функцию, которая принимает пользователя и число
// и меняет ему зарплату на число с помощью ф-ии changeSalary

const changeSalary = function (value) {
  this.salary += value;
};

const changeUserSalary = (user, value) => {
  changeSalary.call(user, value);
  // changeSalary.apply(user, [value]);
};

const user1 = {
  name: 'Den',
  salary: 1300,
};

const user2 = {
  name: 'Ann',
  salary: 2500,
};

changeUserSalary(user1, 300);
changeUserSalary(user2, -400);
console.table(user1);
console.table(user2);
