import { addNumber } from './add-number.js';

import { insert } from '../data-access/insert.js';
import { find } from '../data-access/find.js';
import { removeAll } from '../data-access/remove-all.js';

describe('addNumber: adds a number to the "numbers" array in state', () => {
  beforeEach(() => {
    removeAll();
  });

  it('adds a number to an empty array', () => {
    insert('numbers', []);
    addNumber(3);
    const numbers = find('numbers');
    expect(numbers).toEqual([3]);
  });

  it('adds a number to a not-empty array', () => {
    insert('numbers', [1, 2]);
    addNumber(3);
    const numbers = find('numbers');
    expect(numbers).toEqual([1, 2, 3]);
  });

  it('throws an error if the argument is not a number', () => {
    const passStingArgument = () => addNumber('4');
    expect(passStingArgument).toThrow(TypeError);
  });
});
