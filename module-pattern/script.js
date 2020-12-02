
"use strict"

const ShippingCart = (function(){
    const cost = 50;
    const cart = [];
    const stock = [];
    let quantity = 5;
    const shippingCost = 10;
    let totalCost = (cost * quantity) + shippingCost;
    const addToCart = function(product, qty){
        //Code to Toggle Comment Starts Here...
        // quantity = qty;
        // totalCost = (cost * quantity) + shippingCost;
        //Code to Toggle Comment Ends Here
        cart.push({item: product, pieces: qty});
        console.log(`You have added a product`);
        console.log(totalCost);
    }
    const addToStock = function(product, quantity){
        stock.push({item: product, pieces: quantity});
        console.log(`${quantity} ${product}s added to Inventory`);
        console.log(stock);
    }
    return {
        cart,
        quantity,
        addToCart,
        addToStock
    }
})();

console.log(ShippingCart.quantity);
ShippingCart.addToCart('book', 5);
ShippingCart.quantity = 10;
console.log(ShippingCart.quantity);
ShippingCart.addToStock('pencil', 15);
ShippingCart.quantity = 10;
ShippingCart.addToCart('pencil', 10);
ShippingCart.quantity = 10;
ShippingCart.addToCart('shapner', 100);
ShippingCart.addToStock('rubber', 15);
console.log(ShippingCart.cart);

//Look for the totalCost log -- and see how closures are 
//working. 
//Toggle the assignment of quantity and totalCost variable to
//see how closures actually work
//See that changing the quantity value outside iife
//doesnt impact the value of total cost 
//However if we need the total cost to change 
//we can do it in the code 
//See the effect yourself by Toggle comments

//This is a very strong use case for closures 



