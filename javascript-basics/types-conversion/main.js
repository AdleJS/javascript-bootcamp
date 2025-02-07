"use strict";
// type conversion string
let value = true;
value = String(value);
console.log(value, typeof (value));

// numeric conversions
let result = "6" / "2";
console.log(result, typeof (result));

let num = "123";
num = Number(num);
console.log(num, typeof (num));
console.log(Number(null));
console.log(Number("text"));
console.log(Number(undefined));

// boolean conversions
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(undefined));
console.log(Boolean(null));