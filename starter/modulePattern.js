'use strict';
/////////////module pattern

/*

- The Module Pattern is one of the most common design patterns used in JavaScript and for good reason.
- The module pattern is easy to use and creates encapsulation of our code. 
- the main goal of the module pattern is to encapsulate functionality,to have private data, and to expose a public API.

And the best way of achieving all that is by simply using a function,because functions give us private data by default

*/

//lets see example

//we will use (IIFE) imidetly invoked FUNCTION expression

export const goods = (function () {
  //the function should be stored in variable
  const shippingCost = 24; //this becomes private variable  they can not accessed outside of this function
  const cart = [];
  const totalPrice = 100;
  const totalQuantity = 200;

  const addToCart = function (product, quantity) {
    console.log(`${product}, ${quantity}  added to cart`);
    cart.push({ product, quantity });
  };
  const orderStock = function (product, quantity) {
    console.log(
      `${product}, ${quantity} ordered from supplier and shipping cost ${shippingCost}`
    ); //we can access the private variable inside the function    in this case shippingCost
  };
  return {
    //this will be exposed to public access  that means they becomes public variable and methods that can be acceced from outside
    cart,
    totalPrice,
    totalQuantity,
    addToCart,
    orderStock,
  };
})();
goods.orderStock('orange', 15);
goods.addToCart('banana', 20); //so we can manuplate addToCart method  becouse it becomes public api
goods.addToCart('onion', 10);
goods.addToCart('onion', 1000);
console.log(goods.cart); //we will get the updated cart with the above 2 product
console.log(goods.totalPrice); //100
console.log(goods.shippingCost); //undefined    becouse  they are private

/*
how do we, for example, have access to the cart variable here and even are able to manipulate it,

So how are we able to do that, even if this IIFE here,so this function has already returned long ago, right?

So this function, of course,was only executed once in the beginning,and then all it did was to return this object

and assigned it to 'goods' variable, right? But then we are able to use all of this and also manipulate the data inside of the function,

which is the function that returned this object. And the answer to how all of this works like this is one more time, 'closures'.

So closures, remember, allow a function to have access to all the variables that were present at its birthplace. 
*/

///here 2nd example of closure
function Age() {
  const age = 20;
  //const presentYear = 2021;

  const calcBirthYear = function (presentYear) {
    console.log(`my birthYear is ${presentYear - age}`);
  };
  return {
    calcBirthYear: calcBirthYear,
  };
}
const newAge = Age();
newAge.calcBirthYear(1989);

// here the function Age is returned   when envoked  and since the function is returned we can not access the returned function
//but  due to closure  calcBirthYear remember the outer function variable and can use them
//that shows closures allow a function to have access to all the variables that were present at its birthplace.
//A closure is a function having access to the parent scope, even after the parent function has closed.
