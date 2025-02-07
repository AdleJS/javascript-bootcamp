"use strict";

// declare a variable and assign a value in two lines
let message;
message = "Hello";
console.log(message);

// declare a variable and assign a value in one line
let anotherMessage = "My name is Askar Adilet";
console.log(anotherMessage);

// it is possible to declare multiple variables in one line but better to split them into separate lines for better readability
let user = "Adilet", age = 29, userMessage = "Hello";
console.log(user, age, userMessage);

let testMessage = "Hello";
testMessage = "World!";
console.log(testMessage);

// copying value to another variable
let firstVariable = "Adilet";
let secondVariable = firstVariable;
console.log(firstVariable);
console.log(secondVariable);

// constant values
const MY_BIRTHDAY = "21.07.1996";
// error: assignment to constant variable
// MY_BIRTHDAY = "new"; 
console.log(MY_BIRTHDAY);
