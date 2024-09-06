import { runGame } from '../index.js';
import { getRandomInt } from '../utils.js';

function getRandomProgression() {
  const randomProgression = [];
  const randomStep = getRandomInt(1, 10); // Generate a new step each time
  let step = 0;

  while (randomProgression.length < 5) {
    step += randomStep;
    randomProgression.push(step);
  }

  return randomProgression;
}

function getBrokenProgression() {
  const randomProgression = getRandomProgression();
  const randomStepRemoved = getRandomInt(0, 4);
  const correctAnswer = randomProgression[randomStepRemoved];
  randomProgression[randomStepRemoved] = '..';

  return {
    question: `Question: ${randomProgression.join(' ')}`,
    correctAnswer: correctAnswer.toString(),
  };
}

const gameLogic = () => {
  const { question, correctAnswer } = getBrokenProgression();
  return {
    question,
    correctAnswer,
  };
};

const description = 'What number is missing in the progression?';

export default () => runGame(gameLogic, description);
