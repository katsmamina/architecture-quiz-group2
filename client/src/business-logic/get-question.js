import { findAll } from '../data-access/find-all.js';

export const accessQuestion = () => {
  const data = findAll();
  const questionsObject = data[0];
  const questionsArray = Object.values(questionsObject);
  console.log(questionsArray[1][0].question);
  return questionsArray[1][0].question;
};
