"use strict";

// 1 exercise
let browser = "Chrome";

if (browser === "Edge") {
    console.log("You've got the Edge!");
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    console.log("Okay we support these browsers too");
} else {
    console.log("We hope that this page looks ok!");
}

// 2 exercise
const num = +prompt('Введите число между 0 и 3', '');

switch (num) {
    case 0:
        console.log("You entered 0");
        break;
    case 1:
        console.log("You entered 1");
        break;
    case 2:
    case 3:
        console.log("You entered 2 or 3");
        break;
}