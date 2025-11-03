// if

if (false) {
    // code will work inside this
}
if (false) {
    // code will not work inside this
}

const isUserLoggedIn = true
if (isUserLoggedIn) {

}

3 != 2
// <, >, <=, >=, ==, !=, ===

if (3 != 2) {
    console.log(true);
}

if (2 == "2") {
    console.log(true);
}

if (2 === "2") { //false doesn't works ahead 
    console.log(true);
}

const temp = 41
if (temp > 50) {
    console.log("less than 50");
}

// let's see else cases >>

if (temp > 50) {
    console.log("gretaer than 50");
} else {
    console.log("less than 50"); 
}

const score = 200

if(score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
//out of the scope, will not work
// console.log(`User power: ${power}`);

const balance = 1000

// Really bad syntax >>
// if (balance > 500) console.log("test"), console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750"); 
} else if (balance < 900) {
    console.log("less than 900"); 
} else {
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// All conditions should be true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

// Anyone condition should be true
if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}