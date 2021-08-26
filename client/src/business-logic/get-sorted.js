import { find } from '../data-access/find.js';

import { sortNumbers } from '../utils/sort-numbers.js';

export const getSorted = () => {
  // read values from state
  const numbers = find('numbers');

  // do things
  const sorted = sortNumbers(numbers);

  // return the result
  return sorted;
};
