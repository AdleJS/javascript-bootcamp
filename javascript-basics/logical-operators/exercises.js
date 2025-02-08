// 1 exercise
console.log(null || 2 || undefined);
console.log(console.log(1) || 2 || undefined);
console.log(1 && null && 2);
console.log(console.log(1) && null && 2);
console.log(null || 2 && 3 || 4);

let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

console.log(value);

// 2 exercise
let age = 12;

if (age >= 14 && age <= 90) {
    console.log("Age is between 14 and 90");
}

if (age < 14 || age > 90) {
    console.log("Age is not between 14 and 90");
}

// 3 exercise
if (-1 || 0) console.log('first');
if (-1 && 0) console.log('second');
if (null || -1 && 1) console.log('third');

// 4 exercise
// let login = prompt("Enter your name:", "");

// if (login == "Admin") {
//     let password = prompt("Enter your password:", "");

//     if (password === "boss") {
//         console.log("Welcome");
//     } else if (password === null || password === "") {
//         console.log("Canceled");
//     } else {
//         console.log("Wrong password");
//     }

// } else if (login === null || login === "") {
//     console.log("Canceled");
// } else {
//     console.log("Not authorized");
// }

// 5 exercise
console.log(undefined ?? NaN ?? null ?? "" ?? " ");

// 6 exercise
let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

console.log(city);

// 7 exercise
let num1 = 10;
let num2 = 20;
let result;

result ??= num1 ?? num2;