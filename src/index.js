import readlineSync from 'readline-sync';
import { userGreetings } from '../src/cli.js';

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const runGame = (gameLogic, description) => {
  const userName = userGreetings();
  console.log(description);

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const { question, correctAnswer } = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { getRandomInt, runGame };
