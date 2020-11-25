'use strict';

const User = function(username, password, birthYear){
  this.username = username;
  this.password = password;
  this.birthYear = birthYear;
}

User.prototype.calculateAge = function(){
  return new Date().getFullYear() - this.birthYear;
}

const Student = function(username, password, birthYear, course){
  User.call(this, username, password, birthYear);
  this.course = course;
}

//Linking prototypes of User and Student
Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

//////MDN Description for object setting constructors
Student.prototype.create = function create(){
  return new this.constructor()
}

new Student().create().create();

Student.prototype.introduce = function(){
  console.log(`Hi my name is ${this.username}.`);
}

const hassaan = new Student('mhazuberi', '123456789', 1991, 'Software Engineering');


hassaan.introduce();
console.log(hassaan);
console.log(hassaan.calculateAge());
console.dir(Student.prototype.constructor);
console.log(hassaan instanceof User);
console.log(hassaan instanceof Student);
console.log(hassaan instanceof Object);