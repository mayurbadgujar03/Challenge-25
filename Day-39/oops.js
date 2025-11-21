// Object literal

const user = {
  username: "Mayur",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// blank object !!
console.log(this);

console.log(user.username);
console.log(user.getUserDetails());


// 'new' is constructor 
// const promiseOne = new Promise();
const date = new Date()

function User (username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = User("Mayur", 12, true);
// // basically overrides the values
// const userTwo = User("Coffee", 12, true);

// console.log(userOne);

const userOne = new User("Mayur", 12, true);
const userTwo = User("Coffee", 12, true);

console.log(userOne);


