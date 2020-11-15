'use strict';

class Account {
  constructor(username, pin, name){
    this.username = username;
    this.pin = pin;
    this.name = name;
    this.movements = [];
    this.locale = navigator.language;
  }
  deposit(val){
    this.movements?.push(val);
  }
  withdraw(val){
    this.deposit(-val);
  }
  approveLoan(val){
    console.log(this.movements.some((mov) => mov > (val*0.25)));
    if(this.movements.some((mov) => mov > (val*0.25))) return true;
    else false;
  }

  requestLoan(val){
    if(this.approveLoan(val)){
      this.deposit(val);
      console.log(`Loan Approved`);
    }
    else console.log(`Loan Denied`);
  }

  displayTransactions(){
    this.movements.forEach((cur, i) => {
      console.log(`${i+1} : ${cur}\n`);
    });
  }

}

const acc1 = new Account('hazberi', 1111, 'Hassaan Zuberi');

acc1.deposit(250);
acc1.withdraw(65);
acc1.deposit(600);
acc1.displayTransactions();
acc1.approveLoan(2300);
acc1.requestLoan(10000);
acc1.displayTransactions();
console.log(acc1);



