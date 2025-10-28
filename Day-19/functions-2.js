//let's play with parameters more

//step:3
// while assuming multiple prices can be passed:  Then we will use spread/rest operator (...) triple dots
// Now we can pass lots of value
function calculateCartPrice(...num1) {
    return num1
};

//step:1
//Case 1: We want to pass price of one item as argument
console.log(calculateCartPrice(2));

//step:2
//Case 2: We want to pass multiple item's price as argument
console.log(calculateCartPrice(200, 400, 600));




//experment - 1
function calculateCartPrice_exp(val1, val2, ...num1) {
    return num1
};
console.log(calculateCartPrice_exp(200, 400, 600, 800));




//objects with functions
const user = {
    username: "max",
    price: 99
}
function handleObject(anyObject) { //we can give any other name to the parameter, and when you pass any argument that will be named as the parameter's name in function
    //type safety is improtant and spelling
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);
handleObject({
    username: "mayur",
    price: 420
})



//array with object

const myNewArray = [200, 400, 600, 800]
function returnSecondValue(getAarry) {
    return getAarry[1]
}
console.log(returnSecondValue(myNewArray));

