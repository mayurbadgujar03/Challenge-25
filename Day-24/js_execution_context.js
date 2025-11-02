// Javascript execution context

// whenever we write code file and the Global Execution Context(GEC) is made automatically. Now the this keyword refers to GEC 

//Interview question that:- how this "this" keyword works in diff environment. [ in broswer: window object ]

//Javascript is Single threaded language, everthink is a proccess


// Different execution context:

// 1. Global execution context
// 2. Function execution context
// 3. Eval execution context


function one() {
    console.log("one");
}
function two() {
    console.log("two");
}
function three() {
    console.log("three");
}

one()
two()
three()