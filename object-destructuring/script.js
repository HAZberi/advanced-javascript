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
////////////////////OBJECT DESTRUCTURING//////////////////////
//Converting object property names into variables
let { name, address, mainMenu } = restaurant;
console.log(name, address, mainMenu);
//Assigning new variable names to object properties
let {
  name: restaurantName,
  address: place,
  openingHours: hours,
  mainMenu: tags,
} = restaurant;
console.log(restaurantName, place, hours, tags);
//Assigning Default values if object property doesn't exist
let { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//Mutating Variables
let a = 111;
let b = 121;
let obj = { a: 23, b: 7, c: 9 };
({ a, b } = obj);
console.log(a, b);
//Nested Objects
let {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);
//Practical Example
restaurant.orderDelivery({
  time: "18:30",
  address: "878 Lakewood Rd NW",
  starterIndex: 2,
  mainCourseIndex: 2,
});
restaurant.orderDelivery({
  address: "6827 10 Ave NW",
  mainCourseIndex: 0,
});
