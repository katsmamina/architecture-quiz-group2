import { insert } from './insert.js';

import { clear } from './local-storage/clear.js';
import { getItem } from './local-storage/get-item.js';
import { setItem } from './local-storage/set-item.js';

describe('insert: inserts an entry in the data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    clear();
  });

  it('throws an error if the key already exists', () => {
    setItem('pie', 'apple');
    const insertMissingKey = () => insert('pie', 'pumpkin');
    expect(insertMissingKey).toThrow(ReferenceError);
  });

  describe('inserts a new entry with a given key & value', () => {
    it('toads are not frogs', () => {
      // insert the new entry
      insert('toad', 'not a frog');
      // assert the key's new value
      expect(getItem('toad')).toEqual('not a frog');
    });
    it('can write different types to the same key', () => {
      insert('isOrange', true);
      expect(getItem('isOrange')).toEqual(true);
    });
    it('data should have only 1 key after creating', () => {
      insert('password', 'P@s5w0rD');
      const numberOfKeys = Object.keys(localStorage).length;
      expect(numberOfKeys).toEqual(1);
    });
  });

  describe('insert checks the types of its arguments', () => {
    describe('if the key is not a string, a TypeError is thrown', () => {
      it('rejects numbers', () => {
        const insertingANumberKey = () => insert(1, 'one');
        expect(insertingANumberKey).toThrow(TypeError);
      });
      it('rejects booleans', () => {
        const insertingABooleanKey = () => insert(false, 'one');
        expect(insertingABooleanKey).toThrow(TypeError);
      });
      it('rejects null', () => {
        const insertingANullKey = () => insert(null, 'one');
        expect(insertingANullKey).toThrow(TypeError);
      });
    });
    describe('if the new data is not a JSON data type, a TypeError is thrown', () => {
      it('rejects functions', () => {
        const insertingAFunction = () => insert('thing', () => {});
        expect(insertingAFunction).toThrow(TypeError);
      });
      it('rejects undefined', () => {
        const insertingAFunction = () => insert('thing', undefined);
        expect(insertingAFunction).toThrow(TypeError);
      });
      it('rejects DOM elements', () => {
        const insertingAFunction = () =>
          insert('thing', document.insertElement('div'));
        expect(insertingAFunction).toThrow(TypeError);
      });
      it('rejects objects containing invalid entries', () => {
        const insertingAFunction = () =>
          insert('thing', {
            a: () => {},
            b: document.insertElement('div'),
          });
        expect(insertingAFunction).toThrow(TypeError);
      });
      it('rejects arrays containing invalid entries', () => {
        const insertingAFunction = () =>
          insert('thing', [() => {}, document.insertElement('div')]);
        expect(insertingAFunction).toThrow(TypeError);
      });
    });
  });
});
