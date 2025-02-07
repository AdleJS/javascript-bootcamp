// 1 exercise
let a = 1;
let b = 1;

let c = ++a; // a=2, c=2
let d = b++; // b=2, d=1

// 2 exercise
let anotherA = 2;
let anotherX = 1 + (anotherA *= 2); // anotherA=4, anotherX=5

// 3 exercise
console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2
console.log("4px" - 2); // Nan
console.log("  -9  " + 5);//  -9  5
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2

// 4 exercise
let numOne = Number(prompt("Enter first number", ""));
let numTwo = Number(prompt("Enter second number", ""));

let result = numOne + numTwo;
console.log(result);