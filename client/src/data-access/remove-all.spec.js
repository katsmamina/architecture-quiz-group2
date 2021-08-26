import { removeAll } from './remove-all.js';

import { clear } from './local-storage/clear.js';
import { setItem } from './local-storage/set-item.js';

describe('removeAll: removes all localStorage entries', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    clear();
  });

  it('removes all keys that are not in the new data', () => {
    setItem('a', 1);
    setItem('b', 2);
    setItem('c', 3);
    removeAll();
    expect(Object.keys(localStorage).length).toEqual(0);
  });
});
