import readlineSync from 'readline-sync';

const userGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName; // Возвращаем имя пользователя
};

export default userGreetings;
