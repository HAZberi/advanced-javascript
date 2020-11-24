'use strict';

//Biulding a new Promise
const lotteryReq = new Promise(function (resolve, reject) {
  console.log('Checking The Results......');
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You LOST Please Try Again 😢'));
    }
  }, 2000)

});

lotteryReq.then(res => console.log(res)).catch(err => console.error(err));
