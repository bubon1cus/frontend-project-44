import { runGame } from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameLogic = () => {
  const randomNum = getRandomInt(0, 100);
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  return {
    question: `Question: ${randomNum.toString()}`,
    correctAnswer,
  };
};

export default () => runGame(gameLogic, description);
