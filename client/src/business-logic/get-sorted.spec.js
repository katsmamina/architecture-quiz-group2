import { getSorted } from './get-sorted.js';

import { insert } from '../data-access/insert.js';
import { removeAll } from '../data-access/remove-all.js';

describe('getSorted: returns a cloned array of the saved numbers, sorted from smallest to greatest', () => {
  beforeEach(() => {
    removeAll();
  });

  it('reads an empty array', () => {
    insert('numbers', []);
    const numbers = getSorted();
    expect(numbers).toEqual([]);
  });

  it('reads a non-empty array of numbers, from smallest to greatest', () => {
    insert('numbers', [2, 1, 4, 3]);
    const numbers = getSorted();
    expect(numbers).toEqual([1, 2, 3, 4]);
  });

  it('the return value is a clone', () => {
    const toInsert = [];
    insert('numbers', toInsert);
    const numbers = getSorted();
    const areSameArray = numbers === toInsert;
    expect(areSameArray).toEqual(false);
  });
});
