'use strict';

const UserProto = {
  calcAge(){
    return new Date().getFullYear() - this.birthYear;
  },

  init(username, password, birthYear){
    this.username = username;
    this.password = password; 
    this.birthYear  = birthYear;
  } 
}

const hassaan = Object.create(UserProto);

const StudentProto = Object.create(UserProto);

const nellie = Object.create(StudentProto);

StudentProto.init = function(username, password, birthYear, course){
  UserProto.init.call(this, username, password, birthYear);
  this.course = course;
}

StudentProto.introduce = function(){
  return `Hi I am ${this.username} and I am studying ${this.course}`;
}

console.log(hassaan);

nellie.init('nellieland', '123789654', 1990, 'Business Analysis');
console.log(nellie.calcAge());
console.log(nellie);
console.log(nellie.introduce());