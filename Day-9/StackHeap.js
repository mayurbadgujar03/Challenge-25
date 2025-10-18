// Stack (primitive), Heap (Non-Primitive)

let name = "Mayur";

let anotherName = name; // gets the copy of name
anotherName = "Raj"

console.log(name);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne; // gets the refrence of same data stored at the userOne

userTwo.email = "mayur@google.com"

console.log(userOne.email);
console.log(userTwo.email);
