'use strict';
//Parent Class
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};

Car.prototype.brake = function () {
  return (this.speed -= 5);
};

//Child Class
const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
//Linking parent prototype
Ev.prototype = Object.create(Car.prototype);
Ev.prototype.constructor = Ev;

Ev.prototype.chargeBattery = function (chargeTo) {
  return (this.charge = chargeTo);
};

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `Tesla going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new Ev('Telsa', 120, 23);

tesla.accelerate();
console.log(tesla.brake());
console.log(tesla.chargeBattery(90));
tesla.accelerate();
console.log(tesla);
