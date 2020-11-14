'use strict';

class Car {
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }
  
  accelerate(){
    return this.speed += 10;
  }
  brake(){
    return this.speed -= 5;
  }
  set speedUS(speed){
    if(!speed) return
    else this.speed = speed * 1.6;
  }

  get speedUS(){
    return this.speed / 1.6;
  }
}

const beamer = new Car('BMW', 120);

console.log(beamer.accelerate());
console.log(beamer.brake());
console.log(beamer.speedUS);
beamer.speedUS = 100;
console.log(beamer.speedUS);
console.log(beamer.accelerate());
console.log(beamer.brake());
console.log(beamer.speedUS);