import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const getArithmeticProgression = (startNumber, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(startNumber);
    startNumber += step;
  }
  return progression.join(' ');
};

const getQuestionAndAnswer = () => {
  const startNumber = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 5);
  const progressionLength = getRandomNumber(5, 10);
  let progression = getArithmeticProgression(startNumber, step, progressionLength);
  const randomIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(progression.split(' ')[randomIndex]);
  progression = progression.split(' ');
  progression[randomIndex] = '..';
  return [progression.join(' '), correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
