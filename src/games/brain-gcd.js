import { runGame } from '../index.js';
import getRandomInt from '../utils.js';

function getGcd(a, b) {
  let num1 = a;
  let num2 = b;
  while ((num1 !== 0) && (num2 !== 0)) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }

  return num1 + num2;
}

const gameLogic = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(1, 100);
  const correctAnswer = getGcd(num1, num2).toString();
  return {
    question: `Question: ${num1} ${num2}`,
    correctAnswer,
  };
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => runGame(gameLogic, description);
