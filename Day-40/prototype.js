let myName = "Mayur    ";

console.log(myName.trueLength);


let myHero = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mayur = function() {
    console.log(`Mayur is present in all objects`);
}

Array.prototype.heyMayur = function() {
    console.log(`Mayur says hello`);
    
}

console.log(heroPower.mayur());
console.log(myHero.mayur());

// console.log(heroPower.heyMayur());
console.log(myHero.heyMayur());




///// Inheritance 

const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "paniPuri     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"mayur".trueLength()
"iceTea".trueLength()