"use strict";

// unary - operator
let num = 1;
num = -num;
console.log(num);

// arithmetic opeartors
console.log(2 + 2);
console.log(2 - 1);
console.log(2 * 5);
console.log(5 / 2);
console.log(11 % 3);
console.log(2 ** 3);

// string concatenation
let concatenatedString = "Hello" + " " + "World";
console.log(concatenatedString);

console.log("2" + 1);
console.log("6" * 2);

// unary + converts to number
console.log(+true);
console.log(+"");

let apples = "2";
let oranges = "3";

let result = +apples + +oranges;
console.log(result);

// assignment operator
let firstNumber = 1;
let secondNumber = 2;
let resultNumber = 3 - (firstNumber = secondNumber + 1); // not recommended
console.log(resultNumber);

let varOne, vartwo, varThree;
varOne = vartwo = varThree = 2 + 2; // not recommended
console.log(varOne, vartwo, varThree);

let numb = 4;
console.log(numb += 2);
console.log(numb -= 2);
console.log(numb *= 2);
console.log(numb /= 2);
console.log(numb %= 2);
console.log(numb **= 2);

// increment and decrement
let counter = 2;
counter++;
console.log(counter);

counter--;
console.log(counter);

let myCounter = 2;
let myNum = ++myCounter;
console.log(myNum)

let postfixCounter = 3;
let postfixNumber = postfixCounter++;
console.log(postfixNumber);
console.log(postfixCounter);

// bitwise operators
console.log(2 & 1);
console.log(2 | 1);
console.log(2 ^ 1);
console.log(~2);
console.log(2 << 1);
console.log(2 >> 1);
console.log(2 >>> 1);