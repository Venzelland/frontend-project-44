import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const operationSymbols = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getRandomOperationSymbol = () => operationSymbols[getRandomNumber(0, (operationSymbols.length - 1))];

const calcArithmeticOperation = (symbol, firstValue, secondValue) => {
  switch (symbol) {
    case '+': 
      return firstValue + secondValue;
    case '-': 
      return firstValue - secondValue;
    case '*': 
      return firstValue * secondValue;
    default: 
      throw new Error(`Unknown symbol: '${symbol}'!`);
  }
};

const getQuestionAndAnswer = () => {
  const randomSymbol = getRandomOperationSymbol(operationSymbols);
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);

  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const correctAnswer = String(calcArithmeticOperation(randomSymbol, firstNumber, secondNumber));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};