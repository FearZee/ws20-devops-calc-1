/**
 * Reverse Polish Notation Calculator
 */

let arguments = process.argv.slice(2);

let operator = [];
let operand = [];

for (let k = 2; k < arguments.length; k++) {
  if (k % 2 === 0) {
    operator.push(arguments[k]);
  }
}

for(let i = 0; i < arguments.length; i++){
  if (i % 2 === 0){

  }else{
    operand.push(arguments[i]);
  }

  if(i==0){
    operand.push(arguments[i]);
  }
}

if(arguments === 0){
  console.log('Supported operators:\n +, -, *, /');
  console.log();
  console.log('Usage example:\n 5 5 + 9 *');
}

if(operator === 0){
  console.log("No valid operator!");
  console.log('Supported operators:\n +, -, *, /');
  console.log();
  console.log('Usage example:\n 5 5 + 9 *');
}

if(operand.length === operator.length){
  console.log('Too many operators passed!');
}

if(operand.length > operator.length+1){
  console.log('Too less operators passed!');
}

/*if(operator === undefined || operand1 === undefined || operand2 === undefined){
  console.error('Usage eg: 5 5 +');
}*/

let result;

/*switch (operator.shift()) {
  case '+':
    result = Number(operand1) + Number(operand2);
    break;
  case '-':
    result = Number(operand1) - Number(operand2);
    break;
  case'*':
    result = Number(operand1) * Number(operand2);
    break;
  case '/':
    result = Number(operand1) / Number(operand2);
    break;
  default:
    console.error('Not implemented:', operator);
}*/

function CalcExe(){
  while (operator.length > 0){
    let tempOp = operator.shift();

    if(result != null){
      if (tempOp === '+') {
        let temp = Number(operand.shift());
        result = (result+temp);
      } else if (tempOp === '-') {
        result = result - Number(operand.shift());
      } else if (tempOp === '*') {
        result = result * Number(operand.shift());
      } else if (tempOp === '/') {
        result = result / Number(operand.shift());
      }else {
        console.log('Operator not supported!');
        console.log('Supported operators:\n\r +, -, *, /');
      }
    }else{
      if (tempOp === '+') {
        result = Number(operand.shift()) + Number(operand.shift());
      } else if (tempOp === '-') {
        result = Number(operand.shift()) - Number(operand.shift());
      } else if (tempOp === '*') {
        result = Number(operand.shift()) * Number(operand.shift());
      } else if (tempOp === '/') {
        result = Number(operand.shift()) / Number(operand.shift());
      }else {
        console.log('Operator not supported!');
        console.log('Supported operators:\n\r +, -, *, /');
      }
    }
  }

  if(result != null){
    console.log(result);
  }
}

CalcExe();

