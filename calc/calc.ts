

function calculate(num1: number, operator: string, num2: number): number {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                throw new Error("Division by zero is not allowed");
            }
        default:
            throw new Error("Invalid operator");
    }
}

// Example usage:
try {
    const result = calculate(5, '+', 3);
    console.log("Result:", result); // Output: 8
} catch (error) {
    console.error(error.message);
}