import { accessAnswers } from '../../business-logic/get-answer.js';

export const changeColor = (e) => {
  e.preventDefault();
  const answers = accessAnswers(0);
  // change color of each answer div for correct and incorrect answers
  if (answers[0].correct === true)
    document.getElementById('div-answer-1').classList.add('correct');
  else document.getElementById('div-answer-1').classList.add('incorrect');
  if (answers[1].correct === true)
    document.getElementById('div-answer-2').classList.add('correct');
  else document.getElementById('div-answer-2').classList.add('incorrect');
  if (answers[2].correct === true)
    document.getElementById('div-answer-3').classList.add('correct');
  else document.getElementById('div-answer-3').classList.add('incorrect');
  if (answers[3].correct === true)
    document.getElementById('div-answer-4').classList.add('correct');
  else document.getElementById('div-answer-4').classList.add('incorrect');

  // makes all other div disable after user selection
  document.querySelectorAll('.div-answer').forEach((element) => {
    if (e.srcElement.id !== element.id) element.classList.add('disable');
  });
};
