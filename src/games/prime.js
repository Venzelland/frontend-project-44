import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNumber = (number) => {
if (number < 2) {
return false;
}
for (let i = 2; i < number; i += 1) {
if (number % i === 0) {
return false;
}
}
return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 50);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};