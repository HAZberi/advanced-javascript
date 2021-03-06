
//This is Importing Module
//All modules are by-default executed in 'strict mode'
//Import statement are executed asyncronously
//Import statement are read syncronously
//Import statemets are always hoisted to the top of the code/file
//Import statements are written at the start of the code in practice

//Part 1, multiple named exports
import "./shoppingCart.js";
import {addToCart, shippingCost as shipping, amountDue as dueToday} from "./shoppingCart.js";
console.log('Importing Module');

// //Cannot use varibles and function names from exporting modules
// //console.log(totalCost);

// //Using an imported module
addToCart("book", 5);

console.log(shipping, dueToday);

//Part 2, export all top level/global scoped varibles and functions

import * as ShoppingCart from "./shoppingCart.js";

ShoppingCart.addToCart('Pencil', 5);
console.log(ShoppingCart.amountDue);

//Part 3, export default values

import add2Cart from "./shoppingCart.js";
add2Cart('shapener', 3);

//Part 4 Mixing default and named export is possible but not recommended

import add, {shippingCost, cart, amountDue} from "./shoppingCart.js";

add('pen', 10);
console.log(shippingCost);
console.log(amountDue);
cart.forEach(pd => console.log(pd.item));