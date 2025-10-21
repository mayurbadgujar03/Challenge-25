// Dates

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleString());

let myCreatedDateWithTime = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDateWithTime.toLocaleString());

let myDateMmDdYy = new Date("2023-01-14");
console.log(myDateMmDdYy.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myDateMmDdYy.getTime());

console.log(Math.floor(Date.now()/1000));


let newData = new Date()
console.log(newData);
console.log(newData.getMonth() + 1);
console.log(newData.getDay());
console.log(newData.getFullYear());
