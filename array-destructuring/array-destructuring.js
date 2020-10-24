"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  //es6+ property assignment syntax
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  //es6+ property assignment syntax
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  address: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //openingHours: openingHours, //es5 syntax
  openingHours, //es6+ syntax
  order: (starterIndex, mainCourseIndex) => {
    return [
      //the scope of this keyword is global because of arrow functions
      restaurant.starterMenu[starterIndex],
      restaurant.mainMenu[mainCourseIndex],
    ];
  },
  orderDelivery: function ({
    starterIndex = 2,
    mainCourseIndex = 0,
    time = new Date().getHours(),
    address,
  }) {
    console.log(
      //the scope of this keyword is lexical because of function expression
      `Order Recieved!! Your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainCourseIndex]} will be deleivered to ${address} at ${time}`
    );
  },
  //es6+ style of methods
  orderPizza(side1, side2, side3) {
    console.log(
      `Enjoy your Pizza with a complementry side of ${side1}, ${side2} and ${side3}`
    );
  },
  orderPasta: function (side1, ...otherSides) {
    console.log(side1, otherSides);
  },
};
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

////////////////////ARRAY DESTRUCTURING///////////////////////
const arr = [71, 22, 28];
//ES5 Destructing Arrays
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
console.log(arr);

//ES6 Destructuring Arrays
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//Working with Given Data for Destructring Arrays

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
//The chef wants to switch the main item with secondary item
//ES5 Reassignment
let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//ES6 Reassignment
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Returning an array and destructuring right away

let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Array Destructuring

let nested = [2, 3, [5, 6]];
//let [i, , [j, k]] = nested;
let [i, j, [, k]] = nested;
console.log(i, j, k);

//default values and destructuring
//let [p,q,r,s] = [2,3];
// let [p,q,r=1,s=1] = [2,3];
let [p = 1, q = 1, r = 1, s = 1] = [2, 3];
console.log(p, q, r, s);
