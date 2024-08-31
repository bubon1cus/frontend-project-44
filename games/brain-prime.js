import {
  getRandomInt,
  runGame,
} from '/home/alexalex/myProjects/frontend-project-44/scr/index.js';

function checkPrime() {
  let number = getRandomInt(0, 100);
  let isPrime = true;

  if (number < 2) {
    return 'no';
  }

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      isPrime = false;
    } else {
      isPrime = true;
    }
  }
  return { question: number, correctAnswer: isPrime === true ? 'yes' : 'no' };
}

const gameLogic = () => {
  const { question, correctAnswer } = checkPrime();
  return {
    question: question,
    correctAnswer: correctAnswer.toString(),
  };
};

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runGame(gameLogic, description);
