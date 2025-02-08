"use strict";

// 1 exercise
if ("0") {
    console.log("Hello");
}

// 2 exercise
let name = prompt("What is official name of Javascript:", "");

if (name === "ECMAScript") {
    console.log("Right!");
} else {
    console.log("You don't know? ECMAScript!");
}

// 3 exercise
let num = Number(prompt("Enter a number:", ""));

if (num > 0) {
    console.log(1);
} else if (num < 0) {
    console.log(-1);
} else {
    console.log(0);
}

// 4 exercise
let a = 1;
let b = 4;
let result = (a + b < 4) ? "Below" : "Over";

// 5 exercise
let login = "Employee";
let message = (login === "Employee") ? "Hello" :
    (login === "Director") ? "Greetings" :
        (login === "") ? "No Login" : "";