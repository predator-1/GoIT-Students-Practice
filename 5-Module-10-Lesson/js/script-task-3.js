/**
 * Напиши класс Client который создаёт объект со свойствами login и email.
 * Объяви приватные свойства #login и #email, доступ к которым сделай через
 * геттер и сеттер login и email.
 */

class Client {
  #login = '';
  #email = '';

  get login() {
    return this.#login;
  }

  set login(value) {
    this.#login = value;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    if (value && value.includes('@')) {
      this.#email = value;
    }
  }
}

console.log(typeof Client);

const client = new Client();
console.log(client.login);
console.log(client.email);

client.login = 'admin';
client.email = 'admin@gmail.com';

console.log(client.login);
console.log(client.email);
