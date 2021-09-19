import { find } from '../data-access/find.js';

export const accessQuestion = (i = 0) => {
  const questions = find('questions');
  return questions[i].question;
};
