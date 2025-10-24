const mySym = Symbol("Key1"); 


// constructor and literal, this are the two types

//Singleton - constructor, only one object, constructor se singleton object banta hai !
Object.create; //constructor method through - singleton

// Object literals now
const JsUser = {
  name: "Mayur", // key: value ka system hota hai - last me BTS "name": "Mayur" aisa hojata hai
  "full name": "Mayur Badgujar",
  age: 18, // Behind the scence >> key ko as "String" treat kiya jata hai
  location: "Surat",
  email: "mayur@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sarurday"],
  [mySym]: "myKey1"// How to add Symbol in object as KEY
};

// How to access !!

// 1 >>>>  people think this is the only way, but NO
console.log(JsUser.email);
// 2 >>>>  we have another way: in sqaure key, key ko as "String" treat kiya jata hai
console.log(JsUser["email"]);

// but now you can't access the "full name" key with DOT operator
// console.log(JsUser."full name"); // will not work

console.log(JsUser[mySym]);

JsUser.email = "mayur@chatgpt.com"; // To change the value of any key
// Object.freeze(JsUser); //now we can't change the object keys
JsUser.email = "user@gmail.com";   // Not changed

// see the output that it shows the SYMBOL differently [] 
console.log((JsUser));

JsUser.greeting = function() { // we're not taking any PARAMETER
    console.log(`Hello JS user`);
}
JsUser.greetingTwo = function() { // we're not taking any PARAMETER
    console.log(`Hello JS user, ${this.name}`);
    //String interpolation, this to get the context
}

//When we have freezed the object we can't add the function that's why it's undefined

//refering the method >> not excuted then function just have the refrence
console.log(JsUser.greeting);
//running it >>> here output + one excuction automatic
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// Note: >>> Dot operator AND [] to acces the values (in special cases)


