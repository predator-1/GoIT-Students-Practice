/**
 * Пример 2 - перепишите классы  Worker, Boss 
    с использованием классов

class A {
  constructor() {
    console.log('A created');
  }
}

class B extends A {
  constructor() {
    super();
    console.log('B created');
  }
}

const a1 = new A();
const b1 = new B();
*/

class Worker {
  constructor({ firstname, lastname, rate, days }) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.days * this.rate;
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

class Boss extends Worker {
  firstname = 123;

  constructor({ firstname, lastname, rate, days, workersCount }) {
    super({ firstname, lastname, rate, days });
    this.workersCount = workersCount;
  }

  getSalary() {
    return super.getSalary() * this.workersCount;
  }
}

// const worker = new Worker({
//   firstname: 'Ivan',
//   lastname: 'Petrov',
//   rate: 10,
//   days: 30,
// });

// console.log(worker.getSalary());
// console.log(worker.getFullName());

const boss = new Boss({
  firstname: 'Stepan',
  lastname: 'Ivanov',
  rate: 15,
  days: 20,
  workersCount: 3,
});

console.log(boss.getSalary());
console.log(boss.getFullName());
