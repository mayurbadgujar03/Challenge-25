
//var c = 300
let a = 400; // totally independent from inner a
if(true){
    // let : will be not accessd out of the this block
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("inner", a);
}



console.log(c);
console.log("outer", a);
console.log(b);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // i is accessable in this loop only
}

// scope in broswer and in code editor is totally different
