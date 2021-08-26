import { remove } from './remove.js';

import { clear } from './local-storage/clear.js';
import { setItem } from './local-storage/set-item.js';

describe('remove: removes an entry from the data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    clear();
  });

  it('throws an error if the key does not exist', () => {
    const removeMissingKey = () => remove('pie');
    expect(removeMissingKey).toThrow(ReferenceError);
  });

  describe('removes the value from a specific key, if that key exists', () => {
    it('toads are not frogs', () => {
      // assign a key in the data
      setItem('toad', 'not a frog');
      // try removing the key's value
      remove('toad');
      // assert the new data
      expect('toad' in localStorage).toEqual(false);
    });
  });

  describe('if the key is not a string, a TypeError is thrown', () => {
    it('rejects numbers', () => {
      const removingANumberKey = () => remove(1);
      expect(removingANumberKey).toThrow(TypeError);
    });
    it('rejects booleans', () => {
      const removingABooleanKey = () => remove(false);
      expect(removingABooleanKey).toThrow(TypeError);
    });
    it('rejects null', () => {
      const removingANullKey = () => remove(null);
      expect(removingANullKey).toThrow(TypeError);
    });
  });
});
