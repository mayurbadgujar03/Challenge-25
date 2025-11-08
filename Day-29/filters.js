const coding = ["js", "ruby", "java", "python", "c++"];

//can't return
const values = coding.forEach((item) => {
    console.log(item);
    
    return item
})

console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
const newNums = myNums.filter( (num) => {
    return num > 4
})
console.log(newNums);



const newNumsTwo = [];

myNums.forEach( (num) => {
    if (num > 4) {
        newNumsTwo.push(num)
    }
})

console.log(newNumsTwo);




