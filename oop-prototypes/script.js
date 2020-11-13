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

//checking prototype of object end of the prototype chain
console.log(hassaan.__proto__.__proto__);
console.log(hassaan.__proto__.__proto__.__proto__);

//check constructor
console.log(hassaan.__proto__.constructor);
console.dir(hassaan.__proto__.constructor);

//array prototype

const arr = [3,6,6,9,9,12,15,15,15,18];

console.log(arr.__proto__);
console.log(Array.prototype);
console.log(arr.prototype === Array.prototype);
console.log(arr.__proto__.__proto__);

//advanced prototype and methods
//create a unique function for arrays
Array.prototype.unique = function(){
  //unique === sets
  //this === array thats calling unique
  //create a new set object with arr
  //return array using spread operator
  return [...new Set(this)];
}
console.log(arr.unique());

//checking DOM prototype chain
const h1 = document.querySelector('h1');
console.dir(h1);

