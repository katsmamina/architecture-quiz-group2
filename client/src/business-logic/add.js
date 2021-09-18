import { findAll } from '../data-access/find-all.js';

export const nextQuiz = (i = 0) => {
  const data = findAll();
  const questionsObject = data[0];
  const questionsArray = Object.values(questionsObject);
  const nextArray = questionsArray[1][i].answers;
    for (let i = 0; i < 9; i++); // increment +1 each time 
  return nextArray;
};