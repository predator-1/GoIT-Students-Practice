// Вы пригласили гостей и хотите посчитать их на входе
// Гости иногда выходят из дома и возвращаются
// https://learn.javascript.ru/map-set

const guest1 = {
  name: 'Ann',
};

const guest2 = {
  name: 'Bob',
};

const guest3 = {
  name: 'Daria',
};
class House {
  #guests = new Set();

  addGuest(value) {
    this.#guests.add(value);
  }

  get guestCount() {
    return this.#guests.size;
  }

  print() {
    this.#guests.forEach(o => console.log(o.name));
  }
}

const house = new House();
house.addGuest(guest1);
house.addGuest(guest2);
house.addGuest(guest3);

guest3.name = 'Tania';
house.addGuest(guest3);

house.print();
