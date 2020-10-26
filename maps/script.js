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

////////////////////////////////////Map Fundamentals//////////////////////////////////////////////
const restaurantMap = new Map();

restaurantMap.set("name", "Papasallis");
restaurantMap.set(1, "F-7 Islamabad");
console.log(restaurantMap);
console.log(restaurantMap.set(2, "Airport Road Pindi"));
//chaining setters
restaurantMap
  .set("menu", [
    "Pizza",
    "Triyaki Chicken",
    "Pasta",
    "Fried Seafood",
    "Garlic Bread",
  ])
  .set(true, "We are open")
  .set(false, "We are closed")
  .set("open", 1100)
  .set("close", 2300);
//getters
console.log(restaurantMap);
console.log(restaurantMap.get("openingHours"));
console.log(restaurantMap.get(true));
console.log(restaurantMap.get(false));
//console.log(restaurantMap.get('name').get(1)); chaining doesn't work here
//Practical Example
let time = 1400;
console.log(
  restaurantMap.get(
    time < restaurantMap.get("close") && time > restaurantMap.get("open")
  )
);
//Other methods
const arr = [1,2];
restaurantMap.set(arr, 'test');
console.log(restaurantMap.get(arr));
restaurantMap.set(document.querySelector('h1'), 'Heading');
console.log(restaurantMap.has("menu"));
restaurantMap.delete(2);
console.log(restaurantMap);
console.log(restaurantMap.size);
