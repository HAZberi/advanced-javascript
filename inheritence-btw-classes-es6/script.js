'use strict';

class User {
  constructor(username, password, birthYear){
    this.username = username;
    this.password = password;
    this.birthYear = birthYear;
  }

  calcAge(){
    return new Date().getFullYear() - this.birthYear;
  }

  set username(name){
    console.log(name);
    if(name.includes(' ')) alert(`${name} can not contain spaces`);
    else this._username = name;
  }

  get username(){
    console.log(`Getter`);
    return this._username;
  }

  static hello(){
    console.log('Hello There');
  }
}

const hassaan = new User('mhazuberi', '123456789', 1991);

console.log(hassaan.calcAge());

console.log(hassaan);

User.hello();

hassaan.username = 'mhazuberi123';

console.log(hassaan);

console.log(hassaan.username);

class Student extends User{
  constructor(username, password, birthYear, course){
    super(username, password, birthYear);
    this.course = course;
  }
  introduce(){
    console.log(`Hi my name is ${this.username} and I study ${this.course}`);
  }
  calcAge(){
    return `My real age is ${User.prototype.calcAge.call(this)} but I feel more like ${2037-this.birthYear}`;
  }

}

const nooramin = new Student('nooramin', '123789654', 1990, 'Networking');

console.log(nooramin.calcAge());
console.log(nooramin.username);
console.dir(nooramin instanceof Student);
console.dir(nooramin instanceof User);
console.dir(nooramin instanceof Object);
console.log(nooramin);
