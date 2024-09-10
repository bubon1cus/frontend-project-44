import { runGame } from '../index.js';
import getRandomInt from '../utils.js';

function getProgression(start, step, length) {
  const progression = [];
  let currentValue = start;

  for (let i = 0; i < length; i += 1) {
    progression.push(currentValue);
    currentValue += step;
  }

  return progression;
}

const composeGameLogic = () => {
  const progressionLength = 5;
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const progression = getProgression(start, step, progressionLength);

  const randomIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: correctAnswer.toString(),
  };
};

const description = 'What number is missing in the progression?';

export default () => runGame(composeGameLogic, description);
