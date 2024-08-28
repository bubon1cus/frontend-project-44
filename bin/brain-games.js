import readlineSync from 'readline-sync';
import { userGreetings } from '../scr/cli.js';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getResult(userAnswer, randomNum, userName) {
  const isEven = randomNum % 2 === 0;

  if (isEven && userAnswer === 'yes') {
    console.log('Correct!');
    return true;
  } else if (!isEven && userAnswer === 'no') {
    console.log('Correct!');
    return true;
  } else {
    const correctAnswer = isEven ? 'yes' : 'no';
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`
    );
    return false;
  }
}

function playGame() {
  const userName = userGreetings(); // Получаем имя пользователя из функции userGreetings
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNum = getRandomInt(0, 100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrect = getResult(userAnswer, randomNum, userName);

    if (isCorrect) {
      correctAnswersCount += 1;
    } else {
      return; // Игра завершится при неверном ответе
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

export { playGame };
