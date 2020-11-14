'use strict';

const UserProto = {
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  },

  init(username, password, birthYear) {
    this.username = username;
    this.password = password;
    this.birthYear = birthYear;
  },
};

const hassaan = Object.create(UserProto);

console.log(hassaan);

hassaan.username = 'mhazuberi';
hassaan.password = '123456789';
hassaan.birthYear = 1991;

console.log(hassaan.calcAge());

console.log(hassaan.__proto__ === UserProto);

const nellie = Object.create(UserProto);

nellie.init('nellieland', '123456789', 1989);

console.log(nellie.calcAge());
