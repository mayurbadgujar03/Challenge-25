const coding = ["js", "ruby", "java", "python", "c++"];

coding.forEach(function (val){
    console.log(val);
})

//using arrow function

coding.forEach( (item) => {
    console.log(item);
} )

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    }
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
} )