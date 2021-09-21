import { changeColor } from '../handlers/select-handler.js';

// changing the color of answers div for correct and incorrect answers
document.querySelectorAll('.div-answer').forEach((element) => {
  element.addEventListener('click', changeColor);
});
