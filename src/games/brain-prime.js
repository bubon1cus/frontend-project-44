import { runGame } from '../index.js';
import getRandomInt from '../utils.js';

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const gameLogic = () => {
  const number = getRandomInt(0, 100);
  const isNumberPrime = isPrime(number);
  return {
    question: number,
    correctAnswer: isNumberPrime ? 'yes' : 'no',
  };
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runGame(gameLogic, description);
