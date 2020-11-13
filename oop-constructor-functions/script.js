'use strict';

/////constructor functions syntax and heirarchy///////////////

//Constructor function or [class] initialization
const User = function(username, password, birthdate){
    //to assign properties to the instance
    this.username = username;
    this.password = password;
    this.birthdate = birthdate;
    //We can also assign methods in the constructor function 
    //but its generally not a good practice
    //so use prototypal inheritance to use it. 
    this.calculateAge = ()=> new Date().getFullYear() - birthdate;
};

//calling or creating instances from constructor function
// 1. new keyword creates an empty object {}
// 2. the constructor function is called and it sets the this={}
// 3. the new empty object is then gets linked to prototype
// 4. the constructor function returns the object => if empty return {} 
//************new User("mhazuberi", '123456789', 1991);*************//

//Instances
const hassaan = new User('mhazuberi', '123456789', 1991);
const omer = new User('momer', '456789', 1991);
const saif = new User('saifkchugtai', '123456', 1992);

console.log(hassaan, omer, saif);
console.log(saif.calculateAge());

const naimat = {
        username : 'naimat90',
        password : 'nomy90',
        birthdate : 1990,
        calculateAge : ()=> new Date().getFullYear() - birthdate
}
console.log(saif instanceof User);
console.log(naimat instanceof User);



