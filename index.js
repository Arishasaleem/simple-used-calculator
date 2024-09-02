#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "please choose first number", type: "number", name: "firstNumber"
    },
    { message: "please choose second number", type: "number", name: "secondNumber" },
    { message: "select valid operation to get the answer",
        type: "list",
        name: "operation",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
// Condition statement
if (answer.operation === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operation === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operation === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operations");
}
;
