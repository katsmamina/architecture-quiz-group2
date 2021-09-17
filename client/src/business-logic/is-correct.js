import { findAll } from '../data-access/find-all.js';

export const isCorrect = (i = 0, j = 0) => {
  const data = findAll();
  const questionsObject = data[0];
  const questionsArray = Object.values(questionsObject);
  console.log(questionsArray[1][i].answers[j].correct);
  const answerIsCorrect = questionsArray[1][i].answers[j].correct;

  return answerIsCorrect;
};