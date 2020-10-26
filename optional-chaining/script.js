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
///////////////////////////////////Optional Chaining ES2020/////////////////////////////
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon?.open);
}
//With Optional Chaining
console.log(restaurant.openingHours?.mon);
console.log(restaurant.openingHours?.mon?.open);

//A Practical Example

for (const day of weekdays) {
  //checking properties dynamically or adding properties dynamically
  let open = restaurant.openingHours[day]?.open ?? "closed";
  let output =
    (typeof open === "string" && `On ${day}, we are ${open}`) ||
    `On ${day}, we open at ${open}`;
  console.log(output);
}

//Methods
console.log(restaurant.order?.(0, 2) ?? "Method does not exist");
console.log(restaurant.orderRisoto?.(0, 2) ?? "Method does not exist");

//Arrays
let users = [{ name: "Hassaan", email: "mhazuberi@gmail.com" }];
//let users = 0;
console.log(users[0]?.name ?? "User Not Found");
