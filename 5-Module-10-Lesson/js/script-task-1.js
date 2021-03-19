class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  set someInt(value) {
    if (typeof value !== 'number') {
      return;
    }
    this._someInt = value;
  }

  get someInt() {
    return this._someInt;
  }

  static #Priveledge = {
    LOW: 'Low',
  };
}

const user = new User('Otto', 'Yep');
user.someInt = 123;
console.log(user.someInt);

// user.fullName = '1';
// console.log(user.fullName);

// const user2 = {
//   firstname: 'Ivan',
//   lastname: 'Petrov',
//   get fullName() {
//     return `${this.firstname} ${this.lastname}`;
//   },
// };

// console.log(user2.fullName);
