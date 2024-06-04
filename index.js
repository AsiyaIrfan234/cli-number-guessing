#! /usr/bin/env node !
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// 1) computer will generate a random number - Done
// 2) user input for guessing number - Done
// 3) compare user input with computer generate number and show result - Done
var randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
var answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
