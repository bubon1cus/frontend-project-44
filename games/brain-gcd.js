import {
  getRandomInt,
  runGame,
} from '/home/alexalex/myProjects/frontend-project-44/scr/index.js';

function getGcd(num1, num2) {
  while ((num1 != 0) & (num2 != 0)) {
    if (num1 > num2) {
      //если num1 больше num2, то num1 присваиваем num1/num2
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1; //наоборот
    }
  }

  return num1 + num2;
}

const gameLogic = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(1, 100);
  const correctAnswer = getGcd(num1, num2).toString();
  return {
    question: `${num1} ${num2}`,
    correctAnswer,
  };
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => runGame(gameLogic, description);
