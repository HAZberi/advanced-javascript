'use strict';

//Biulding a new Promise
const lotteryReq = new Promise(function (resolve, reject) {
  console.log('Checking The Results....');
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You LOST Please Try Again 😢'));
    }
  }, 2000);
});

lotteryReq.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying Existing Callbacks

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second has passed')
    return wait(1);
  }).then(() => {
    console.log('2 second has passed')
    return wait(1);
  }).then(() => {
    console.log('3 second has passed')
    return wait(1);
  }).then(() => {
    console.log('4 second has passed')
    return wait(1);
  })
  .catch(err => console.log(err));

  //Immidiately Resolved Promises

  Promise.resolve('abc').then(res => console.log(res));
  Promise.reject(new Error('abc')).catch(err => console.log(err));
