'use strict';

class Account {
  //Public Fields
  locale = navigator.language;
  //Private Fields
  #movements = [];
  #pin;

  constructor(username, pin, name){
    this.username = username;
    this.#pin = pin;
    this.name = name;
  }
  //Public Methods
  deposit(val){
    this.#movements?.push(val);
  }
  withdraw(val){
    this.deposit(-val);
  }

  requestLoan(val){
    if(this.#approveLoan(val)){
      this.deposit(val);
      console.log(`Loan Approved`);
    }
    else console.log(`Loan Denied`);
  }

  displayTransactions(){
    this.#movements.forEach((cur, i) => {
      console.log(`${i+1} : ${cur}\n`);
    });
  }

  //Private Methods in future
  #approveLoan(val){
    console.log(this.#movements.some((mov) => mov > (val*0.25)));
    if(this.#movements.some((mov) => mov > (val*0.25))) return true;
    else false;
  }

}

const acc1 = new Account('hazberi', 1111, 'Hassaan Zuberi');

acc1.deposit(250);
acc1.withdraw(65);
acc1.deposit(600);
acc1.displayTransactions();
//acc1.#approveLoan(2300);
acc1.requestLoan(10000);
acc1.displayTransactions();
console.log(acc1);