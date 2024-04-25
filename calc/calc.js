"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: Process.stdout
});
function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            }
            else {
                throw new Error("Division by zero is not allowed");
            }
        default:
            throw new Error("Invalid operator");
    }
}
// Example usage:
rl.question('Enter first number: ', function (num1) {
    rl.question('Enter operator (+, -, *, /): ', function (operator) {
        rl.question('Enter second number: ', function (num2) {
            try {
                var result = calculate(5, '+', 3);
                console.log("Result:", result); // Output: 8
            }
            catch (error) {
                console.error(error.message);
            }
            rl.close();
        });
    });
});
