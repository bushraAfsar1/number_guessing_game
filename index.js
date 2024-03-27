#! /usr/bin/env node
import inquirer from "inquirer";
let generatedNumber = Math.floor(Math.random() * 10);
//  console.log(generatedNumber);
const answer = await inquirer.prompt([
    {
        name: 'guessedNumber', message: 'Enter your guessing number', type: 'number'
    }
]);
if (generatedNumber === answer.guessedNumber) {
    console.log(`you guessed right number ${answer.guessedNumber} is correct!`);
}
else if (generatedNumber > answer.guessedNumber) {
    console.log(`your guessed number ${answer.guessedNumber} is less than to the right number`);
}
else {
    console.log(`your guessed number ${answer.guessedNumber} is greater than to the right number`);
}
;
