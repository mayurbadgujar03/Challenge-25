const name = "mayur"
const repoCount = 13

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String("mayur-mb");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf("y"));

const newStr = gameName.substring(0, 4)
console.log(newStr);

const anotherStr = gameName.slice(-5, 4)
console.log(anotherStr);

const userName = "         mayur        "
console.log(userName);
console.log(userName.trim());

const url = "https://mayur.com/mayur%20bad"

console.log(url.replace('%20', '-'));

console.log(url.includes("mayur"));

console.log(gameName.split("-"));

