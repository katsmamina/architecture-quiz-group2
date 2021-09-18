import { findAll } from '../data-access/find-all.js';

export const accessAnswers = (i = 0) => {
  const data = findAll();
  const questionsObject = data[0];
  const questionsArray = Object.values(questionsObject);
  const answerArray = questionsArray[1][i].answers;
  return answerArray;
};
