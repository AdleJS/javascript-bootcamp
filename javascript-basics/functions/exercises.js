"use strict";

function checkAge(age) {
    return age >= 18 ? true : console.log("Do you have permission from your parents?");
}

function min(a, b) {
    return a < b ? a : b;
}

function pow(x, n) {
    if (n < 1) {
        return;
    }

    return x ** n;
}

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);