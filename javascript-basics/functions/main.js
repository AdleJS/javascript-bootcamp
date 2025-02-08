"use strict";

// function declarations
function showMessage() {
    let message = "It is Javascript!";
    console.log(message);
}

showMessage();

// functions can modify global variables
// Javascript engine sees function declarations and moves them to the top of the code
// this is called "hoisting"
// function declarations have block scope
let name = "Adilet";

function changeName() {
    name = "Alisher";
}

console.log(name);
changeName();
console.log(name);

function showMessageParams(from, text = "no text") {
    console.log(from + ": " + text);
}

showMessageParams("Adilet", "Hello!");
showMessageParams("Alisher");

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("Do you have permission from your parents?");
    }
}

// function expressions
let myFunc = function () {
    console.log("Function Expression")
};

console.log(myFunc);

let anotherFunc = myFunc;
myFunc();
anotherFunc();

// arrow functions
let showMsg = () => console.log("Arrow Function");
let double = n => n * 2;
let sum = (a, b) => a + b;
let div = (a, b) => {
    let result = a / b;
    return result;
};

console.log(sum(2, 3));