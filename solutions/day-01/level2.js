// First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

text = text.split(".").join("").split(",").join("");
let words = text.split(' ');

console.log(words)
console.log(words.length)

// In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(shoppingCart.indexOf('Meat')) shoppingCart.unshift('Meat');
if(shoppingCart.indexOf('Sugar')) shoppingCart.push('Sugar');

let honeyIndex = shoppingCart.indexOf('Honey');
shoppingCart.splice(honeyIndex, 1);

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

// Works with live-server, otherwise we get a CORS error
import countries from "./countries.js";
if(countries.indexOf('Ethiopia') != -1) console.log('ETHIOPIA'); else countries.push('Ethiopia');

import webTechs from "./web_techs.js";
if(webTechs.indexOf('Sass') != -1) console.log('Sass is a CSS preprocess'); else {webTechs.push('Sass'); console.log(webTechs)}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd);

console.log(fullStack)