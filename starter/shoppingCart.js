//here we will export
console.log('we are exporting module');

const shippingCost = 10; /*varible inside the module is scoped to that module  means private to that module they can not accessed outside of that module if we want to be accesed outside of this module we sholud export them*/
export const cart = [];

/*And in ES modules, there are two types of exports,Named Exports and Default Exports.

And named imports is actually the simplest way of exporting something from a module,

because all we have to do is to put export in front of anything, that we might want to export.*/

//exports always need to happen in top level code ;  if we put inside the function it will not work

// if(true){//this will not work becouse export is not in top level code
//     export const addToCart = function (product, quantity) {
//     console.log(product, quantity);
//     cart.push(product);
//   };}

//this will work
export const addToCart = function (product, quantity) {
  console.log(`${product}, ${quantity}`);
  cart.push({ product, quantity });
};

//we can also export multiple things from a module using Named Exports.

// export const totalPrice = 237;
// export const totalQuantity = 23;
//or
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity };

////default export
//So usually, we use Default Exports when we only want to export one thing per module, and so that's the reason why they are called default.

export default function (product, quantity) {
  console.log(`${product}, ${quantity}`);
  cart.push({ product, quantity });
}
