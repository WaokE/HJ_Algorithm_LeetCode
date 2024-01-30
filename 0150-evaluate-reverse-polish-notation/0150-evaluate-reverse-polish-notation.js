/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const operators = ['+', '-', '*', '/'];
    tokens.forEach((token) => {
        if (operators.includes(token)) {
            const operand2 = Number(stack.pop());
            const operand1 = Number(stack.pop());
            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(Math.trunc(operand1 / operand2));
                    break;
            }
        }
        else {
            stack.push(Number(token));
        }
    })
    return stack.pop();
};