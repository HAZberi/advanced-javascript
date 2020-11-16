'use strict';

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    return (this.speed += 10);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
  set speedUS(speed){
    this.speed = speed*1.6;
  }
  get speedUS(){
    return this.speed/1.6;
  }
}

class Ev extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargebattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new Ev('Rivian', 120, 23);

rivian
  .accelerate()
  .brake()
  .chargebattery(85)
  .accelerate()
  .accelerate()
  .brake()
  .accelerate();

console.log(rivian);
console.log(rivian.speed);
console.log(rivian.make);
console.log(rivian.speedUS);
rivian.speedUS = 100;
rivian.brake().brake().brake();
console.log(Car.prototype.accelerate.call(rivian));
console.log(rivian.speedUS);
//console.log(rivian.#charge); returns error
