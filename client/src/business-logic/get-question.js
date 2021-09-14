import { findAll } from '../data-access/find-all.js';

export const accessQuestion = () => {
  const database = findAll();
  const allQuestions = database;
  console.log(allQuestions);
  return allQuestions;
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
