import { hideWelcomeMessage } from '../handlers/hide.js';

// Hide display of div Welcome Message
export const startQuiz = document.querySelector ('.btn');
startQuiz.addEventListener ('click', hideWelcomeMessage);