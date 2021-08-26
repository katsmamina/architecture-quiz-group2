import { get } from './get.js';

import { insert } from '../data-access/insert.js';
import { removeAll } from '../data-access/remove-all.js';

describe('get: the value stored behind a key', () => {
  beforeEach(() => {
    removeAll();
  });

  it('reads a primitive value', () => {
    insert('number', 1);
    const number = get('number');
    expect(number).toEqual(1);
  });

  it('reads an empty array', () => {
    insert('numbers', []);
    const numbers = get('numbers');
    expect(numbers).toEqual([]);
  });

  it('reads a non-empty array of numbers, from smallest to greatest', () => {
    insert('numbers', [2, 1, 4, 3]);
    const numbers = get('numbers');
    expect(numbers).toEqual([2, 1, 4, 3]);
  });

  it('the return value is a clone', () => {
    const toInsert = [];
    insert('numbers', toInsert);
    const numbers = get('numbers');
    const areSameArray = numbers === toInsert;
    expect(areSameArray).toEqual(false);
  });

  it('throws an error if the argument is not a string', () => {
    const passANumber = () => get(1);
    expect(passANumber).toThrow(TypeError);
  });
});
