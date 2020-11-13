'use strict';

const Car = function(make, speed){
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

const beamer = new Car('BMW', 120);
const merc = new Car('Mercedes', 95);

beamer.accelerate();
beamer.accelerate();
beamer.brake();
beamer.brake();
merc.accelerate();
merc.accelerate();
merc.brake();
merc.brake();