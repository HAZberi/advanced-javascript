'use strict';

class User{
  constructor(username, password, birthYear){
    this.username = username;
    this.password = password;
    this.birthYear = birthYear;
  }
  //prototypes are defined within the class after contructor function
  calculateAge(){
    return new Date().getFullYear() - this.birthYear;
  }
}

const hassaan = new User('mhazuberi', '123456789', 1991);
console.log(hassaan);

console.log(hassaan.calculateAge());
console.log(User.prototype === hassaan.__proto__);

User.prototype.greet = function(){
  console.log(`Hi ${this.username}. Welcome to ES6 Classes`);
}
hassaan.greet();

//1. Classes are not Hoisted
//2. Classes are also first class citizens
//3. Classess are executed in stict mode