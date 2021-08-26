import { allKeys } from './all-keys.js';

import { clear } from './local-storage/clear.js';
import { setItem } from './local-storage/set-item.js';

describe('allKeys: returns an array with all the saved keys', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    clear();
  });

  it('returns all the keys if they exist', () => {
    setItem('a', 1);
    setItem('b', true);
    setItem('c', 'asdf');
    expect(allKeys()).toEqual(['a', 'b', 'c']);
  });

  it('returns an empty array if there are no keys', () => {
    expect(allKeys()).toEqual([]);
  });
});
