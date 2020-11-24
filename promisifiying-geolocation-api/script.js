'use strict';

//Getting Location Information
/* const getPosition = navigator.geolocation.getCurrentPosition(
  function (pos) {
    console.log(pos);
  },
  function (err) {
    console.log(err);
  }
); */

//Promisifying

/* const getPosition = function(){
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function(pos){
      resolve(pos);
    }, function(err) {
        reject(err);
      })
    })
}

getPosition().then(pos => console.log(pos)).catch(err => console.error(err)) */

//Refactor
const getPosition = function () {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};
getPosition()
  .then(pos => console.log(pos))
  .catch(err => console.error(err));

//Log the current Position

//Plug this Idea in coding challenge 07
//Head Over to Coding Challenge to see the implementations
