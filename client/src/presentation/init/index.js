// keep this import! you will need it
import { loadListener } from '../listeners/load.js';

// hide welcome message at pressing "start"

import { startQuiz } from '../listeners/start.js';

import { accessQuestion } from '../../business-logic/get-question.js';
import { accessAnswers } from '../../business-logic/get-answer.js';

// keep this listener call!  you will need it
loadListener();

accessQuestion();
accessAnswers();
