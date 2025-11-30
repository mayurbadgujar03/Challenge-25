const myArr = [];
// %DebugPrint(myArr);

// Continious, Holey

// SMI (small integer)
// Packed element
// Double (float, srting, function)

const arrTwo = [1, 2, 3, 4, 5]
// Packed_SMI_Elements

arrTwo.push(6.0);
// Packed_Double_Elements

arrTwo.push('7')
// Packed_Elements

arrTwo[10] = 11
// Holey_Elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);
console.log(arrTwo[19]);

// Bound chechk
//hasOwnProperty(arrTwo, 9)
//hasOwnProperty(arrTwo.prototype, 10)
//hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree);

// SMI > DOUBLE > PACKED 
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
//just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1'  //HOLEY_ELEMENTS
arrFour[1] = '2'  //HOLEY_ELEMENTS
arrFour[2] = '3'  //HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') // PACKED_ELEMETS
arrFive.push('2') // PACKED_ELEMETS
arrFive.push('3') // PACKED_ELEMETS

const arrSix = [1, 2, 3, 4, 5]

arrSix.push(Infinity)

//for, forEach
