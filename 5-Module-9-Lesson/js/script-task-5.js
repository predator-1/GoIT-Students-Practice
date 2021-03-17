/**
 * Создайте корабль который уммет стрелять и отнаследуйте от него боевой корабль
 */

const Ship = function (country, hp, captain, price) {
  this.country = country;
  this.hp = hp;
  this.captain = captain;
  this.price = price;
};

Ship.prototype.fire = function () {
  console.log(`Hello from ${this.country}`);
};

const ship = new Ship('USA', 10000, 'Black Jack', 999999);
ship.fire();

const WarShip = function (armor, ...args) {
  Ship.apply(this, args);
  this.armor = armor;
};

WarShip.prototype = Object.create(Ship.prototype);
WarShip.prototype.constructor = WarShip;

const warShip = new WarShip('steel', 'Ukraine', 20000, 'Mykola', 900999);
warShip.fire();
