import { find } from '../data-access/find.js';
import { save } from '../data-access/save.js';

export const addNumber = (newNumber = 0) => {
  if (typeof newNumber !== 'number') {
    throw new TypeError('newNumber is not a number');
  }

  // read values from state
  const numbers = find('numbers');

  // add new number to the array
  numbers.push(newNumber);

  // update state
  save('numbers', numbers);
};
