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

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀  */
//Task 1
for (const [index, value] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${value}`);
}
//Task 2
let sum = 0;
let allodds = Object.values(game.odds);
for (const odds of allodds) {
  sum += odds;
}
console.log(`Average odds are ${sum / allodds.length}`);
//Task 3
//use square brackets for dynamic values to access or create new properties
for (const [oddType, odds] of Object.entries(game.odds)) {
  if (game[oddType]) {
    console.log(`Odd of victory ${game[oddType]}: ${odds}`);
  } else {
    console.log(`Odd of draw: ${odds}`);
  }
}
//Task 4
let scorers = {};

for (const scorer of game.scored) {
  if (scorers[scorer]) {
    scorers[scorer]++;
  } else {
    scorers[scorer] = 1;
  }
}
console.log(scorers);
