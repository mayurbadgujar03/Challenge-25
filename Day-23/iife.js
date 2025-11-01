// Immediately Invoked Function Expressions (IIFE)

//Intersting concept:- write function then excute it immediately
// Case: sometime we need to connect database, as file just runs, in that case we can use this function

//to create different scope + to invoke immediately


// normal function
function chai() {
    console.log('DB CONNECTED');
}
// chai()


//IIFE
// create scope (func(){}) + excute it ()
(function coffee() {
    console.log('DB CONNECTED');
})();


// what is IIFE
// function defination       // function excution    // Always need to end it, simply the function wants to know - where to stop the context
// ()                           ()                      ;
//BUT FOR INTERVIEW
// >>>  To aviod pollution of global + variable of global scope, we use this IIFE

//let try ARROW function with IIFE
( () => {
    console.log('DB CONNECTED');
} )();


//add parameters and arguments
( (name) => { //argument
    console.log(`${name}, DB CONNECTED`);
} )("mayur"); //parameter


//named IIFE
( function user(name){ //argument
    console.log(`${name}, DB CONNECTED`);
} )("mayur") //parameter