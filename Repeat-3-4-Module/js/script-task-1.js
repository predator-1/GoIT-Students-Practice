/**
 * Objects
 */

const getName = () => 'name';

const hotel = {
  name: 'Palace',
  guests: 100,
  addGuests: function (count) {
    this.guests += count;
  },
};

hotel.addGuests(100);

console.log(hotel.guests);
console.log(hotel['guests']);

console.log(hotel[getName()]);

delete hotel['name'];

console.log(hotel);
