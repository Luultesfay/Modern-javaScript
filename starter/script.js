//practicing import and export
//also we dont need to define 'strict mode' manually  becouse strict mode defined in modules ny default

//here we will import
//importing module pattern

// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js'; //So remember that all the importing statements are basically hoisted to the top. even if we wrote them below some codes
console.log('we are importing module'); //this to work we need to (connect module to html file)add atrubute  type to module in the html// type=module
// //we got output   1.we are exporting   2.we are importing    first with the exported one b/c the exported one should down load first

// addToCart('bread', 12);
// console.log(totalPrice, totalQuantity); //237 23

//we can also change the name like this    totalPrice as Price, totalQuantity as tq,

// import {
//   addToCart,
//   totalPrice as Price,
//   totalQuantity as tq,
// } from './shoppingCart.js'; //So remember that all the importing statements are basically hoisted to the top. even if we wrote them below some codes
// console.log('we are importing module'); //this to work we need to (connect module to html file)add atrubute  type to module in the html// type=module
// //we got output   1.we are exporting   2.we are importing    first with the exported one b/c the exported one should down load first

// addToCart('bread', 12);
// console.log(Price, tq); //237 23

//we can also import all the exports  of a module at the same time.

import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart('bread', 5);
console.log(shoppingCart.totalPrice); //237

//from default export
//we can call what ever name that comes from default export  we will call it here add

//import add from './shoppingCart.js'; //we also use here the same module ('./shoppingCart.js') twice   its not a problem but its not advisable
add('pizza', 3); //pizza, 3

//we can also mix  both named export and default export but its not advisable
//what you probably should really not do is to mix Default and Named Exports like we did here, so avoid that to reduce complexity.

// import add, { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// add('pizza', 3); //pizza, 3
// console.log(totalPrice);

//lets prove that 'imports' are in fact, a 'live' connection to exports.
//we will export cart  from  the shopping cart.js  with empty array   , here we will mix named and default exports for the sake of this example
import add, { cart } from './shoppingCart.js'; //we also use here the same module ('./shoppingCart.js') twice   its not a problem but its not advisable
add('pizza', 3); //pizza, 3
add('fish', 1);
add('orange', 6);

console.log(cart); //we get the output  with array filled  the added product and quantity

/*
see what happens.So here we do not see that empty object,that we export, but instead we have this array

with the objects that we just added to the cart,by calling the add function here.And so that proves that this import here,

is in fact, not simply a copy of the value,that we exported here.

Because if it was,then here we would simply get that empty array,
*/

//note   imports are not copies of the export.They are instead like a live connection,and so what that means is that I point to the same placein memory,because again, otherwise, if it was a copy then here, we would not get anything in the array.

// import goods from './modulePattern.js';
// console.log(goods);
import * as modulePattern from './modulePattern.js'; //we export all the module

console.log(modulePattern);
console.log(modulePattern.goods.orderStock('mele', 40));

//////271 coomonjs
/////272  commandline practice

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 4 },
    { product: 'pizza', quantity: 4 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateClonedeep = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateClonedeep);
