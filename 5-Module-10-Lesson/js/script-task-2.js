/**
 * Напиши класс Storage который создаёт объекты для управления складом товаров.
 * При вызове будет получать один аргумент - начальный массив товаров,
 * и записывать его в свойство items.
 * Добавь методы класса:
 * getItems() - возвращает массив товаров.
 * addItem(item) - получает новый товар и добавляет его к текущим.
 * removeItem(item) - получет товар и, если он есть, удаляет его из текущих.
 */

class MyStorage {
  constructor(items) {
    this._items = [];
  }

  getItems() {
    return this._items;
  }

  addItem(item) {
    this._items.push(item);
  }

  removeItem(item) {
    const index = this._items.indexOf(item);
    if (index > -1) {
      this._items.splice(index, 1);
    }
  }
}

const storage = new MyStorage([]);

storage.addItem(1);
storage.addItem(4);
storage.addItem(8);
storage.addItem(2);
storage.addItem(7);

console.log(storage.getItems());

storage.removeItem(8);
storage.removeItem(98);

console.log(storage.getItems());
