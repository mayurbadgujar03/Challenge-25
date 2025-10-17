// # Primitive --> Call by value

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 33333333333223n




// # Non-Primitive --> Call by reference

// 3 types : Array, Objects, Functions


const heros = ["Shaktiman", "naagraj", "doga"];

let myObj = {
    name: "mayur",
    aga: 19
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);

//https://262.ecma-international.org/5.1/#sec-11.4.3
