import { hideWelcomeMessage } from '../handlers/hide.js';
import { displayFirstQuestionAndAnswers } from '../handlers/display.js';

// Hide display of div Welcome Message
export const startQuiz = document.querySelector ('.btn');
startQuiz.addEventListener ('click', hideWelcomeMessage);
// display first question and answers
startQuiz.addEventListener('click', displayFirstQuestionAndAnswers);
