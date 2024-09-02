import { getRandomInt, runGame } from '../index.js';

function checkPrime() {
  const number = getRandomInt(0, 100);
  let isPrime = true;

  if (number < 2) {
    return { question: number, correctAnswer: 'no' };
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  return { question: number, correctAnswer: isPrime ? 'yes' : 'no' };
}

const gameLogic = () => {
  const { question, correctAnswer } = checkPrime();
  return {
    question: `Question: ${question}`,
    correctAnswer: correctAnswer.toString(),
  };
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runGame(gameLogic, description);
