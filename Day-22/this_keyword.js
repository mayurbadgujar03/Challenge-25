//suppose we have the user, login to our website
const user = {
    username: "Mayur",
    price: 999,

    //defining a method, and storing it in a variable
    welcomeMessage: function() {
        //"this" keyword have a context, context of the scope
        console.log(`${this.username}, welcome to website`);
        //has the context of current values
        console.log(this);
    }
}

// refering the method "welcomeMessage", the user has, and excuting it ()
user.welcomeMessage();
//changing the variable "username"
user.username = "max";
//again, but this time updated, and gets the updated variable, because it has the context
user.welcomeMessage();



// In NODE environment, it referes to empty object, there is nothing in gobal context 
console.log(this);



// >>>>>>>>>>>>>>>>>>>> Arrow functions

function coffee() {
    // context of whole function
    console.log(this);

    let username = "mayur";
    //but when try to use it with, a variable it doesn't have the context of function - maybe doesn't work with function
    // console.log(this.username);
}

coffee()


const chai = function () {
    console.log(this);

    let username = "mayur";

    console.log(this.username);
}

// same result
chai()


//arrow function

// way one 
//neccassary to write "return" keyword
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));

//way two

const addthree = (num1, num2, num3) => num1 + num2 + num3;

console.log(addthree(3, 4, 5));

//way three

const addfour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4);

console.log(addfour(3, 4, 5, 6));

//way four
//returing object
const addfive = (num1, num2, num3, num4, num5) => ({result: num1 + num2 + num3 + num4 + num5});

console.log(addfive(3, 4, 5, 6, 4));
