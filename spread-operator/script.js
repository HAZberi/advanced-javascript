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

//NOTE!!! THE SPREAD OPERATOR TAKES ALL THE ELEMENTS FROM THE ARRAY
//AND IT ALSO DOESN'T CREATE NEW VARIABLES AND AS A CONSEQUENCE WE CAN
//ONLY USE IT IN PLACES WHERE WE WOULD OTHERWISE WRITE VALUES SEPARATED BY
//COMMAS.
////////////////////Spread Operator///////////////////////////
let arr = [15, 18, 21];
let oldes5Array = [-1, 9, arr[0], arr[1], arr[2]];
console.log(oldes5Array);

let newes6Array = [-1, 9, ...arr];
console.log(newes6Array);
console.log(...newes6Array);

let menuItems = [...restaurant.mainMenu, "Ravioli"];
console.log(...menuItems);
//Copy Array
let mainMenuCopy = [...restaurant.mainMenu];
console.log(...mainMenuCopy);
//Merging 2 arrays in one
let menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...menu);
console.log(menu);
//spread operators on strings
let str = "Hassaan";
console.log(...str);
//-------Following code doesn't work--------//
// console.log(`${...str} Zuberi`);
console.log(...(str + " Zuberi"));
//A Practicle example
// let getAvailableSides = [
//   prompt(`Enter the first side: `),
//   prompt(`Enter the second side:`),
//   prompt(`Enter a third side:`),
// ];

// restaurant.orderPizza(...getAvailableSides);

//how spread operator works on OBJECTS

let restaurantCopy = { ...restaurant };
restaurantCopy.name = "Papasallis";
console.log(restaurant);
console.log(restaurantCopy);

let historyRestaurant = {
  founder: "Mario Insigne",
  ...restaurant,
  foundedIn: "1989",
};

console.log(historyRestaurant);
