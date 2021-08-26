import { find } from './find.js';

import { clear } from './local-storage/clear.js';
import { getItem } from './local-storage/get-item.js';
import { setItem } from './local-storage/set-item.js';

describe('find: reads an entry in the data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    clear();
  });

  it('throws an error if the key does not exist', () => {
    const readMissingKey = () => find('pie');
    expect(readMissingKey).toThrow(ReferenceError);
  });

  describe('reads the value from a specific key, if that key exists', () => {
    it('toads are not frogs', () => {
      // assign a key in the data
      setItem('toad', 'not a frog');
      // try reading the key's value
      const returnedValue = find('toad');
      // assert the returned value
      expect(returnedValue).toEqual('not a frog');
    });
    it('does not modify the stored data', () => {
      setItem('loggedIn', false);
      find('loggedIn');
      expect(getItem('loggedIn')).toEqual(false);
    });
  });

  describe('read returns a copy of data you requested', () => {
    it('does not store the same array you pass', () => {
      setItem('someNumbers', [1, 2, 3]);
      const returnedValue = find('someNumbers');
      const areDifferentArrays = getItem('someNumber') !== returnedValue;
      expect(areDifferentArrays).toEqual(true);
    });
    it('does return a deep clone of the data requested', () => {
      setItem('someNumbers', [1, 2, 3]);
      const returnedValue = find('someNumbers');
      // assert deep equality!
      expect(returnedValue).toEqual(getItem('someNumbers'));
    });
  });
});
