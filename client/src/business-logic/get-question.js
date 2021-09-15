import { findAll } from '../data-access/find-all.js';

export const accessQuestion = (i) => {
  const data = findAll();
  const questionsObject = data[0];
  const questionsArray = Object.values(questionsObject);
  //   console.log(questionsArray[1][i].question);
  return questionsArray[1][i].question;
};

// accessQuestion(0);

// import { allKeys } from '../data-access/all-keys.js';

// export const listQuestions = () => {
//   const allQuestions = allKeys();
//   const firstQuestion = allQuestions.question;
//   //   console.log(allQuestions);
//   console.log(firstQuestion);
// };

// accessQuestion();
// listQuestions();
