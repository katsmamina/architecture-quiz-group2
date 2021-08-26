import { findAll } from './find-all.js';

import { clear } from './local-storage/clear.js';
import { setItem } from './local-storage/set-item.js';

describe('findAll: returns an array with all key/value pairs in localStorage', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    clear();
  });

  it('returns an empty array if the store is empty', () => {
    expect(findAll()).toEqual([]);
  });

  it('returns all values if they exist', () => {
    setItem('a', 1);
    setItem('b', true);
    setItem('c', ['hello']);
    const allEntries = findAll();
    expect(allEntries).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: true },
      { key: 'c', value: ['hello'] },
    ]);
  });
});
