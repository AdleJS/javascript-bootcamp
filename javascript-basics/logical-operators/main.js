"use strict";

// Logical OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(1 || 0);

let hour = 9;

if (hour < 10 || hour > 18) {
    console.log("The office is closed.");
}

let result = 0 || '' || 123;
console.log(result);

let adiletHasCar = false;

adiletHasCar ||= "Adilet doesn't have a car.";
console.log(adiletHasCar);

// Logical AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(1 && 0);

let hourAnd = 12;
let minute = 30;

if (hourAnd == 12 && minute == 30) {
    console.log('Time is 12:30');
}

let resultAnd = 1 && 2 && null && 3;
console.log(resultAnd);

let greeting = "Hello";
greeting &&= greeting + " World!";
console.log(greeting);

// Logical NOT
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!!0);

// nullish coalescing operator
let user;
console.log(user ?? "Anonymous");

let num = (1 && 2) ?? 3;
console.log(num);

let userAge = 18;
userAge ??= 21;
console.log(userAge);