// Function is kind of package, where we write set of code and can be used same again and again, by calling it here and there
function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("R");
}
sayMyName // refrence 
sayMyName() // excute



//When you define the function
function addTwoNumbers(num1, num2) { //num1 and num2 are PARAMETERS
    console.log(num1 + num2);
}
// when you call and pass variables then it is called ARUGMENTS
addTwoNumbers(3, 4) // 3 and 4 are arguments
addTwoNumbers(3, "4") // assumes that both arguments are string because second one is the string
addTwoNumbers(3, "a")



// when you haven't used the RETURN statment then, the variable will be undefined
const result = addTwoNumbers(3, 5);
//UNDEFINED because function returns nothing
console.log(result);




function addTwoNumbersAndReturn (num1, num2) { //This time we are using the return statment
    let result = num1 + num2; //storing the results 

    return result; //and now the function will return the result, after calling it

    console.log("After return statement any line will not be reachable"); //After return statement any line will not be reachable
    
}
const resultWithReturn = addTwoNumbersAndReturn(4, 6);

console.log(resultWithReturn);






function addTwoNumbersDirectReturn (num1, num2) { //This time we are using the return statment

    return num1 + num2; //and now the function will return the result, after calling it
    
}
const resultWithDirectReturn = addTwoNumbersAndReturn(4, 6);

console.log(resultWithDirectReturn);



function loginUserMessage (username) { // PARAMETER username: string
    return `${username} just logged in`
}

loginUserMessage // only reference
loginUserMessage() // reference + excutes
loginUserMessage("mayur") // reference + excutes + parameters

// but we haven't stored the return result in any variable now and haven't print the excuted result
console.log(loginUserMessage("mayur"));






// WITH CONDITION: what if the user not passes any parameters

function loginUserMessages (username) { // PARAMETER username: string
    if (username === undefined) {
        console.log("Please enter a username");
        return; // after this the last line will not be print and the function returns not
    }
    return `${username} just logged in` // i want that user passes nothing, then this line should not print
}
console.log(loginUserMessages());


//empty string treats as FALSE
//undefined treats as FALSE

// instead of username === undefined >> !username





// this time passing a default value for backup in parameters, if user passes nothing then the default value is used
function loginUserMessages (username = "mayur") { // PARAMETER username: string 
    if (username === undefined) {
        console.log("Please enter a username");
        return; // after this the last line will not be print and the function returns not
    }
    return `${username} just logged in` // i want that user passes nothing, then this line should not print
}
console.log(loginUserMessages());