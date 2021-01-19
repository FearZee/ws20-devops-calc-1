/**
 * Reverse Polish Notation Calculator
 */

let arguments = process.argv.slice(2);

let operand1 = arguments[0];
let operand2 = arguments[1];
let operator = arguments[2];

console.log('Calculating:', operand1, operand2, operator);

let result;

switch (operator) {
  case '+':
    result = Number(operand1) + Number(operand2);
    break;
  default:
    console.error('Not implemented:', operator);
}

console.log(result);
