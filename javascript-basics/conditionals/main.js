"use strict";

let year = 2014;

if (year === 2015) {
    console.log("You are right");
    console.log("The year is 2015");
} else if (year === 2014) {
    console.log("The year is 2014");
} else {
    console.log("You are wrong");
}

if (0) {
    console.log("This will not be printed");
}

if (1) {
    console.log("This will be printed");
}

// ternary operator
let result = (5 > 2) ? "5" : "2";
console.log(result);