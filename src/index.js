import readlineSync from 'readline-sync';

const userGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName; // Возвращаем имя пользователя
};

const runGame = (composeGameLogic, description) => {
  const userName = userGreetings();
  console.log(description);
  const roundsCount = 3;

  for (let correctAnswersCount = 0; correctAnswersCount < roundsCount; correctAnswersCount += 1) {
    const { question, correctAnswer } = composeGameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { runGame, userGreetings };
