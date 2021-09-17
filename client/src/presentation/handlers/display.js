import { accessQuestion } from '../../business-logic/get-question.js';
import { accessAnswers } from '../../business-logic/get-answer.js';

export const displayFirstQuestionAndAnswers = (e) => {
  // display first question and answers and change innerHTML of start button
  e.preventDefault();
  document.getElementById('container-quiz').classList.remove('hide');
  document.getElementById('btn').innerHTML = 'Next';
  const question = accessQuestion(0);
  document.getElementById('question-header').innerText = question;
  const answers = accessAnswers(0);
  document.getElementById('p-answer-1').innerText = answers[0].text;
  document.getElementById('p-answer-2').innerText = answers[1].text;
  document.getElementById('p-answer-3').innerText = answers[2].text;
  document.getElementById('p-answer-4').innerText = answers[3].text;
};
