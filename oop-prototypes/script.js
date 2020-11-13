'use strict';

/////constructor functions syntax and heirarchy///////////////

//Constructor function or [class] initialization

const User = function (username, password, birthYear) {
  this.username = username;
  this.password = password;
  this.birthYear = birthYear;
};

//Create Instance
const hassaan = new User('mhazuberi', '123456789', 1991);
const saif = new User('saifkchugtai', '456789', 1992);
console.log(hassaan);

//create a prototype function
User.prototype.calculateAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

//create a prototype property
User.prototype.userType = 'Client';

hassaan.calculateAge();

//Prototype Object
console.log(User.prototype);
console.log(hassaan.__proto__);

//Checking prototypes
console.log(User.prototype.isPrototypeOf(hassaan));
console.log(hassaan.__proto__.isPrototypeOf(hassaan));
console.log(User.prototype.isPrototypeOf(saif));
console.log(User.prototype.isPrototypeOf(User));

//Checking the instances of object
console.log(saif.hasOwnProperty('birthYear'));
console.log(saif.hasOwnProperty('calculateAge'));
console.log(saif.__proto__.hasOwnProperty('calculateAge'));
console.log(User.prototype.hasOwnProperty('calculateAge'));

//difference between defined property and prototype property
console.log(User.prototype.hasOwnProperty('userType'));
console.log(saif.hasOwnProperty('userType'));
console.log(hassaan.hasOwnProperty('userType'));
