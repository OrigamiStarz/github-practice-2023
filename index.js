const gavinFunction = () =>{
  const userQuestion = 'Do you like me? ';
  const userAnswer = "Yes";
  const input = prompt(userQuestion);
  const answer= `Why ${input}??`;
  const isCorrect = input && input.toLowerCase() === userAnswer.toLowerCase();

  console.log(isCorrect);
};

gavinFunction();


