import { save } from './save.js';

import { clear } from './local-storage/clear.js';
import { getItem } from './local-storage/get-item.js';
import { setItem } from './local-storage/set-item.js';

describe('save: saves an entry in the data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    clear();
  });

  it('throws an error if the key does not exist', () => {
    const saveMissingKey = () => save('pie', 'apple');
    expect(saveMissingKey).toThrow(ReferenceError);
  });

  describe('writes a new value to keys that already exist', () => {
    it('toads are not frogs', () => {
      // assign a key in the data
      setItem('toad', '');
      // try updating the key's value
      save('toad', 'not a frog');
      // assert the key's new value
      expect(getItem('toad')).toEqual('not a frog');
    });
    it('can write different types to the same key', () => {
      setItem('isOrange', '');
      save('isOrange', true);
      expect(getItem('isOrange')).toEqual(true);
    });
    it('data should still have only 1 key after updating', () => {
      setItem('password', '');
      save('password', 'P@s5w0rD');
      const numberOfKeys = Object.keys(localStorage).length;
      expect(numberOfKeys).toEqual(1);
    });
  });

  describe('save checks the types of its arguments', () => {
    describe('if the key is not a string, a TypeError is thrown', () => {
      it('rejects numbers', () => {
        const savingANumberKey = () => save(1, 'one');
        expect(savingANumberKey).toThrow(TypeError);
      });
      it('rejects booleans', () => {
        const savingABooleanKey = () => save(false, 'one');
        expect(savingABooleanKey).toThrow(TypeError);
      });
      it('rejects null', () => {
        const savingANullKey = () => save(null, 'one');
        expect(savingANullKey).toThrow(TypeError);
      });
    });
    describe('if the new data is not a JSON data type, a TypeError is thrown', () => {
      it('rejects functions', () => {
        setItem('thing', '');
        const savingAFunction = () => save('thing', () => {});
        expect(savingAFunction).toThrow(TypeError);
      });
      it('rejects undefined', () => {
        setItem('thing', '');
        const savingAFunction = () => save('thing', undefined);
        expect(savingAFunction).toThrow(TypeError);
      });
      it('rejects DOM elements', () => {
        setItem('thing', '');
        const savingAFunction = () =>
          save('thing', document.createElement('div'));
        expect(savingAFunction).toThrow(TypeError);
      });
      it('rejects objects containing invalid entries', () => {
        setItem('thing', '');
        const savingAFunction = () =>
          save('thing', {
            a: () => {},
            b: document.createElement('div'),
          });
        expect(savingAFunction).toThrow(TypeError);
      });
      it('rejects arrays containing invalid entries', () => {
        setItem('thing', '');
        const savingAFunction = () =>
          save('thing', [() => {}, document.createElement('div')]);
        expect(savingAFunction).toThrow(TypeError);
      });
    });
  });
});
