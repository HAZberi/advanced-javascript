'use strict';

///////////Converts array like structure to array//////

Array.from(document.querySelectorAll('h1'));

Number.parseFloat(12.235642);

///////////////////////////////////////////////////////

class User {
  constructor(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
  }

  static hey(){
    console.log(this);
    console.log(`Hi there`);
  }
}

User.hello = function(){
  console.log(this);
  console.log(`Hello There`);
}

const hassaan = new User('mhazuberi', '123456789', 'mhazuberi@gmail.com');

User.hello();

User.hey();