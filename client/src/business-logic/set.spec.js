import { set } from './set.js';

import { find } from '../data-access/find.js';
import { insert } from '../data-access/insert.js';
import { removeAll } from '../data-access/remove-all.js';

describe('set: the value stored behind a key', () => {
  beforeEach(() => {
    removeAll();
  });

  it('sets values that do not exist in state', () => {
    set('number', 1);
    const number = find('number');
    expect(number).toEqual(1);
  });

  it('sets values that do exist in state', () => {
    insert('number', 1);
    set('number', 1);
    const number = find('number');
    expect(number).toEqual(1);
  });

  it('throws an error if the argument is not a string', () => {
    const passANumber = () => set(1, 1);
    expect(passANumber).toThrow(TypeError);
  });
});
