const gavinFunction = () =>{
  const userQuestion = 'Do you like me? ';
  const userAnswer = "Yes";
  const input = prompt(userQuestion);
  const answer= `Why ${input}t??`;
  const isCorrect = input && input.toLowerCase() === userAnswer.toLowerCase();
const resultMessage = isCorrect ? `Nice! "${userAnswer}" is correct. `: `Oops! "${answer} ${userAnswer}".`;
console.log(resultMessage);

};

gavinFunction();


