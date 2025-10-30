// nested scope

//its just like olders can get icecream from elders
function one() {
    const username = "mayur"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //this will undefined, because the variable is not in the call stack, we haven't called the function which defines that variable
    // console.log(website);

    two()
}

one()



////
if(true) {
    const username = "mayur"
    if(username === "mayur") {
        const website = " youtube"
        //but this runs as expected, beacuse the if statement is inside the main scope of that outer statement
        console.log(username + website);
    }
    // so website has scope only in the IF box
    // console.log(website);
}

// console.log(username);



// we can run normal functions any where, JUST DEFINE THEM FIRST
console.log(addOne(5))

function addOne (num) {
    return num + 1
}

//return huaa hai, print nhi
addOne(5)


// this is the concept of hoisting: Scope level and mini hoisting in javascript

//BUt with function EXPRESSION, we can't access before the declaration, because we stored(holded) it into a variable
addTwo(5)

// function EXPRESSION
const addTwo = function(num) {
    return num + 2
}

addTwo(5)