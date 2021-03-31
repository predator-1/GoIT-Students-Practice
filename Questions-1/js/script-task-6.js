// Создайте записную книжку куда можно
// внести имя и номер телефона человека
// найти номер по имени
// показать количество контактов
// удалить контакт по имени
// https://learn.javascript.ru/map-set

class Contacts {
  #contact = new Map();

  add(name, phone) {
    this.#contact.set(name, phone);
  }

  get count() {
    return this.#contact.size;
  }

  findContact(name) {
    return this.#contact.get(name);
  }
}

const contacts = new Contacts();
contacts.add(true, '0990099');
console.log(contacts.findContact(true));

contacts.add(true, '099009911');
console.log(contacts.findContact(true));

console.log(contacts.count);
