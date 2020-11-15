'use strict';

class Account {
  constructor(username, pin, name){
    this.username = username;
    this.pin = pin;
    this.name = name;
    this._transactions = [];
    this.locale = navigator.language;
  }
  deposit(val){
    this._transactions.push(val);
    //return this keyword to enable chanining
    return this;
  }
  withdraw(val){
    this.deposit(-val);
        //return this keyword to enable chanining
    return this;
  }
  requestLoan(val){
    if(this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
          //return this keyword to enable chanining
      return this;
    }else {
      console.log(`Loan Denied`);
          //return this keyword to enable chanining
      return this;
    }
  }
  displayTransactions(){
    this._transactions.forEach((cur, i)=>{
      console.log(`${(i+1).toString().padStart(3, '0')} : ${(cur).toString().padStart(10, ' ')}`);
    })
  }
  approveLoan(val){
    if(this._transactions.some((el) => el > (val*0.25))) return true;
    else false;
  }
}

const acc1 = new Account('hazberi', 1111, 'Hassaan Zuberi');

console.log(acc1);
acc1.deposit(500).withdraw(900).deposit(1000).requestLoan(1000).withdraw(500).requestLoan(1500).displayTransactions();