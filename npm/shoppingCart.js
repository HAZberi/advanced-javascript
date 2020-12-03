"use strict"
//This is Exporting Module
console.log('Exporting Module');

const product = 50;
const cart = [];
const quantity = 5;


// putting export in front of any variable or function name will make it 
//accessible in importing modules.
// Export can only happen in the global/top level scope of the existing file

const addToCart = function(product, quantity){
    cart.push({item: product, pieces: quantity});
    console.log(`You have added a product`);
    console.log(cart);
}

const shippingCost = 10;
const totalCost = (product * quantity) + shippingCost;

export {addToCart, shippingCost, totalCost as amountDue, cart};

export default function(product, quantity){
    cart.push({item: product, pieces: quantity});
    console.log(`You have added a product`);
    console.log(cart);
}
