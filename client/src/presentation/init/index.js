// keep this import! you will need it
import { loadListener } from '../listeners/load.js';

// hide welcome message at pressing "start"

import { startQuiz } from '../listeners/start.js';

// you can get rid of this one
// import { addNumberListener } from '../listeners/add-number.js';
import { accessQuestion } from '../../business-logic/get-question.js';

// keep this listener call!  you will need it
loadListener();
// you can get rid of this one
// addNumberListener();
accessQuestion();
