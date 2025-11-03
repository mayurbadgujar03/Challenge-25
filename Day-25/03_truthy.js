// truthy and falsy value >>

//true if have some value
const userEmail = "mayur.ai"

//false if the string is empty
const user = "";

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", "false", " ", [], {}, function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
// it's just for safety check
// if anyone is null then other will be selected
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// its just a fallback

console.log(val1);


// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

