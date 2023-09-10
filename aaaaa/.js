const question = "What is 1 + 1";
const correctAnswer = "2";
const userAnswer = prompt(question);

const isCorrect = userAnswer === correctAnswer;

const resultMessage = 
  isCorrect
  ? `Congratulations!`
  : `Oops "${userAnswer}" is incorrect! The correct answer is ${correctAnswer}".`;



console.log(resultMessage);
