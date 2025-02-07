"use strict";

// variable in javascript can hold any type
let message = "Hello, World";
message = 123;
console.log(message);

// numberic typ
let testNumber = 123;
let testFloatnumber = 3.14;
console.log(testNumber);
console.log(testFloatnumber);
console.log(typeof testNumber);
console.log(typeof testFloatnumber);
console.log(1 / 0);
console.log("some number" / 2);
console.log(NaN * 3);
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);

// add n to the end of number literal to get BigInt variable
let bigInt = 1234567890123456789012345678901234567890n;
let result = bigInt + 2n;
console.log(result);

// string type
let firstStr = "Askar";
let secondStr = 'Adilet';
let phrase = `I am ${firstStr} ${secondStr}`;
console.log(phrase);

// boolean type
let isFavorite = false;
let isFieldChecked = true;
console.log(isFavorite);
console.log(isFieldChecked);

let isGreater = 4 > 1;
console.log(isGreater);

// null type
let age = null;
console.log(age);
console.log(age == null);

// undefined type
let undefinedVar;
console.log(undefinedVar);
console.log(undefinedVar == undefined);
console.log(typeof undefinedVar);

// typeof operator
console.log(typeof (50 + "cows"));
console.log(typeof (null)); // typeof mistake
console.log(typeof (alert));
console.log(typeof (2n));