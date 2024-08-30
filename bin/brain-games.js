// import readlineSync from 'readline-sync';
// import { userGreetings } from '../scr/cli.js';

// // brain-even-------------

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getResultBrainEven(userAnswer, userName, randomNum) {
//   const isEven = randomNum % 2 === 0;

//   if (isEven && userAnswer === 'yes') {
//     console.log('Correct!');
//     return true;
//   } else if (!isEven && userAnswer === 'no') {
//     console.log('Correct!');
//     return true;
//   } else {
//     const correctAnswer = isEven ? 'yes' : 'no';
//     console.log(
//       `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`
//     );
//     return false;
//   }
// }

// function playBrainEven() {
//   const userName = userGreetings(); // Получаем имя пользователя из функции userGreetings
//   console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

//   let correctAnswersCount = 0;

//   while (correctAnswersCount < 3) {
//     const randomNum = getRandomInt(0, 100);
//     console.log(`Question: ${randomNum}`);
//     const userAnswer = readlineSync.question('Your answer: ');

//     const isCorrect = getResultBrainEven(userAnswer, userName, randomNum);

//     if (isCorrect) {
//       correctAnswersCount += 1;
//     } else {
//       return; // Игра завершится при неверном ответе
//     }
//   }

//   console.log(`Congratulations, ${userName}!`);
// }

// // brain-calc ----------------

// function getRandomSymbols() {
//   const mathSymbols = ['+', '-', '*']; // add parametr '/'
//   const random = Math.floor(Math.random() * mathSymbols.length);
//   return mathSymbols[random];
// }

// function getResultBrainCalc(
//   userAnswer,
//   userName,
//   randomNum1,
//   randomNum2,
//   randomSymbols
// ) {
//   const correctAnswer = eval(`${randomNum1} ${randomSymbols} ${randomNum2}`);

//   if (correctAnswer === parseInt(userAnswer)) {
//     console.log('Correct!');
//     return true;
//   } else
//     console.log(
//       `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`
//     );
//   return false;
// }

// function playBrainCalc() {
//   const userName = userGreetings(); // Получаем имя пользователя из функции userGreetings
//   console.log(`What is the result of the expression?`);

//   let correctAnswersCount = 0;

//   while (correctAnswersCount < 3) {
//     const randomNum1 = getRandomInt(0, 100);
//     const randomNum2 = getRandomInt(0, 100);
//     const randomSymbols = getRandomSymbols();
//     console.log(`Question: ${randomNum1} ${randomSymbols} ${randomNum2}`);
//     const userAnswer = readlineSync.question('Your answer: ');

//     const isCorrect = getResultBrainCalc(
//       userAnswer,
//       userName,
//       randomNum1,
//       randomNum2,
//       randomSymbols
//     );

//     if (isCorrect) {
//       correctAnswersCount += 1;
//     } else {
//       return; // Игра завершится при неверном ответе
//     }
//   }

//   console.log(`Congratulations, ${userName}!`);
// }

// // export -----

// export { playBrainEven, playBrainCalc };
