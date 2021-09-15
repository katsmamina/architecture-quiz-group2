// keep this file!  it works, and you will need it

import { load } from '../data-access/load.js';

export const initializeState = async () => {
  await load('../../../data/quiz.json', import.meta);
};
