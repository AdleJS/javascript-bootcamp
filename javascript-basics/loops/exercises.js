"use strict";

// 1 exercise
let i = 3;

while (i) {
    console.log(i--);
}

// 2 exercise
let j = 0;
while (++j < 5) {
    console.log(j) // 1, 2, 3, 4
}

let k = 0;
while (k++ < 5) {
    console.log(k) // 1, 2, 3, 4, 5
}

// 3 exercise
for (let i = 0; i < 5; i++) console.log(i); // 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) console.log(i); // 0, 1, 2, 3, 4

// 4 exercise
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 5 exercise
let m = 0;

while (m < 3) {
    console.log(`number ${m}`);
    m++;
}

// 6 exercise
let num = Number(prompt("Enter a number greater than 100", ""));

while (num <= 100 && num) {
    num = Number(prompt("Enter a number greater than 100", ""));

    if (num > 100 || num === null) {
        console.log(`Your number is ${num}`);
        break;
    }
}

// 7 exercise
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...
    for (let j = 2; j < i; j++) { // проверить, делится ли число..
        if (i % j == 0) continue nextPrime; // не подходит, берём следующее
    }

    console.log(i); // простое число
}
