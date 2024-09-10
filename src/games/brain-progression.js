import { runGame } from '../index.js';
import getRandomInt from '../utils.js';

function getProgression(step, length) {
  const progression = [];
  let value = step;

  for (let i = 0; i < length; i += 1) {
    progression.push(value);
    value += step;
  }

  return progression;
}

const gameLogic = () => {
  const progressionLength = 5;
  const step = getRandomInt(1, 10);
  const progression = getProgression(step, progressionLength);

  const randomIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: correctAnswer.toString(),
  };
};

const description = 'What number is missing in the progression?';

export default () => runGame(gameLogic, description);
