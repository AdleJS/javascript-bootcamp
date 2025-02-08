"use strict";

// while loop
let i = 0;

while (i < 3) {
    console.log(i);
    i++;
}

// do-while loop
let j = 0;

do {
    console.log(j);
    j++;
} while (j < 3);

// for loop
for (let k = 0; k < 3; k++) {
    console.log(k);
}

// break and continue
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    } else if (i === 7) {
        break;
    } else {
        console.log(i);
    }
}