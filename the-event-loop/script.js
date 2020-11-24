'use strict';

//////////////////////////////The Event Loop/////////////////////////////////////

//There are four different stacks in Async Javascript
//Javascript is a single threaded language
//Single Threaded mean it simply cannot perform two tasks at 
//the same time or in parallel. 
//Java has the capability of multi threading 
//So how does async tasks are done in Javascript?
//Thats is acheived through WEBAPIs like DOM, FETCH and SETTIMEOUT
//So we have four stacks
//1. The usual execution stack - Javascript Execution Call Stack
//2. The WebApi stack
//3. The MicroTasks Que
//4. The Callback Queue
// The following code demonstrate how the code will be executed 
// and which statements will be printed first

//This line will go directly to the call stack and is executed FIRST
//Because its the first line of code (higher in order) and goes directly 
//to the call stack
console.log('Test Start');

//SetTimeOut is a WEBAPI feature so it goes to WebAPI and waits for completion
//The completion happens instantly since the time is zero seconds
//At Completeion it goes to the Callback queue and wait for:
// 1. MicroTask Que
// 2. Other callbacks in front in Callback Que
//Once the callstack and microTask Que is cleared then items from
//the callback que go into the call stack
//So in this example setTimeOut will be executed LAST
setTimeout(()=>console.log('0 sec timer'), 0);

//Promises also go the WebAPI and waits for completion
//The completion happens instantly in this case and the then() callback
//goes to the microtasks que - specifically for promises
//So MicroTask Que has priority over Callback Que
//So This Line will execute before set Time out
//So this Promise will then go to the call stack and will be placed
//behind the second console.log statement 
//So THIRD line to get executed
Promise.resolve('Resolved Promise No. 1').then(res => console.log(res));

//Here a new promise with a callback that takes longer to complete
//So again this will to the WebAPi and waits for instant completion
//Then it moves to the Microtasks Queue and gets behind the first promise
//So this line of code will also run before the setTimeOut
//You can see the delay in execution of the following in the console
//From microservies task it goes to the call stack and will be placed behind
//the first promise So FOURTH Line to get executed
Promise.resolve('Resolved Promise No. 2').then(res => {
  for(let i=0; i<1000000000; i++){}
  console.log(res);
})

//This line will go directly to the JS call stack and will be 
//placed behind the first console.log statement 
//So The following line will get executed SECOND
console.log('Test End');