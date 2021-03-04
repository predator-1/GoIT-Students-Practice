/**
 * Destruction
 */

 const hotel = {
     name: 'palace',
     places: 100,
 }

const printHotel = function(someHotel) {
    const { name, places } = someHotel;
    console.log(`${name} with ${places} places`);
}