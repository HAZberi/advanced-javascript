'use strict';

const account = {
  owner: 'Hassaan',
  movements: [200, 530, 700, 850],

  get recent() {
    return this.movements.slice(-1).pop();
  },

  set recent(mov) {
    this.movements.push(mov);
    console.log(this.movements);
  },
};

//getters cannot be called like methods
//getters and setters both are called like properties
console.log(account.recent);
account.recent = 600;


//advanced getter and setter methods
class User {
  constructor(username, password, birthYear) {
    this.username = username;
    this.password = password;
    this.birthYear = birthYear;
  }

  set username(name) {
    console.log(name);
    if (name.includes(' ')) alert(`The username cannot not contain spaces`);
    else this._username = name;
  }

  get username() {
    console.log(`I am getter`);
    return this._username;
  }
}

const hassaan = new User('mhazuberi 123', '123456789', 1991);

//hassaan.username = 'mhazuberi123';

console.log(hassaan);

hassaan.username = 'mhazuberi123';

hassaan.username;

console.log(hassaan);
