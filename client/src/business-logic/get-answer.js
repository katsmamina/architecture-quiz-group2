import { find } from '../data-access/find.js';

export const accessAnswers = (i = 0) => {
  const questions = find('questions');
  return questions[i].answers;
};
