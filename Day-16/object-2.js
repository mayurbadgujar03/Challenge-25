// Today >>> Singleton - Constructor method !!

const tinderUser = new Object(); // Singleton Object hai
// const tinderUser = {} // Ye NON-Singleton object hai

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Mayur", //nesting object ke ander object
      lastname: "Badgujar",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname?.userfullname.firstname); // optional chaining, what if in cases a big data, then some chuk might not have this "userfullname", adding optional chaining save from error while looping

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { obj1, obj2 };
//Object.assign(target, dataSoucre)
const obj4 = Object.assign(obj1, obj2);
//Object.assign(target {}, dataSoucres obj1)
const obj5 = Object.assign({}, obj1, obj2);

// Object ke ander object wali problem
console.log(obj3);
console.log(obj4);
//sure that it returns only object
console.log(obj5);

console.log(obj4 === obj1);

const obj6 = { ...obj1, ...obj2 }; //spread operator, glass gira aur sab spread ho gaya

const users = [
  {
    id: 1,
    email: "m2gmail.com",
  },
  {
    id: 1,
    email: "m2gmail.com",
  },
  {
    id: 1,
    email: "m2gmail.com",
  },
  {
    id: 1,
    email: "m2gmail.com",
  },
];

users[1].email;
console.log(users[1].email);

// agar we need all keys of the object, return in array
console.log(Object.keys(tinderUser));

// agar we need all values of the object
console.log(Object.values(tinderUser));

// converts each key-value in a single array
console.log(Object.entries(tinderUser));

// agar if we what to know that a property is in the object or not ?
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
