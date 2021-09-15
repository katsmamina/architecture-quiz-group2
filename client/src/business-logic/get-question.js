import { findAll } from '../data-access/find-all.js';

export const accessQuestion = () => {
  const data = findAll();
  const questionsObject = data[0];
  const questionsArray = Object.values(questionsObject);
  console.log(questionsArray[1]);
  // return question;
};

// import { allKeys } from '../data-access/all-keys.js';

// export const listQuestions = () => {
//   const allQuestions = allKeys();
//   const firstQuestion = allQuestions.question;
//   //   console.log(allQuestions);
//   console.log(firstQuestion);
// };

// accessQuestion();
// listQuestions();
