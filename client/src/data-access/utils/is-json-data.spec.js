import { isJsonData } from './is-json-data.js';

describe('isJsonData: checks if a value can be serialized to JSON', () => {
  describe('when the values are primitives', () => {
    it('allows strings', () => {
      expect(isJsonData(' ')).toEqual(true);
    });
    it('allows numbers', () => {
      expect(isJsonData(0)).toEqual(true);
    });
    it('allows booleans', () => {
      expect(isJsonData(true)).toEqual(true);
    });
    it('allows null', () => {
      expect(isJsonData(null)).toEqual(true);
    });
    it('does not allow undefined', () => {
      expect(isJsonData(undefined)).toEqual(false);
    });
    it('does not allow symbols', () => {
      expect(isJsonData(Symbol('symbol!'))).toEqual(false);
    });
  });
  describe('when the values are reference-type', () => {
    it('allows arrays', () => {
      expect(isJsonData([])).toEqual(true);
    });
    it('allows objects', () => {
      expect(isJsonData({})).toEqual(true);
    });
    it('does not allow functions', () => {
      expect(isJsonData(() => {})).toEqual(false);
    });
    it('does not allow dates', () => {
      expect(isJsonData(new Date())).toEqual(false);
    });
    it('does not allow sets', () => {
      expect(isJsonData(new Set())).toEqual(false);
    });
    // ...
  });
  describe('isJsonData deeply checks the contents of arrays and objects', () => {
    it('allows arrays containing valid JSON data', () => {
      expect(
        isJsonData(['', 1, false, null, [2, true, { x: null }], { a: 0 }]),
      ).toEqual(true);
    });
    it('allows objects containing valid JSON data', () => {
      expect(
        isJsonData({
          a: '',
          b: [3, '', false],
          c: false,
          d: null,
          e: [4, { e: 0 }, null],
          f: { f: [{}] },
        }),
      ).toEqual(true);
    });
    it('does not allow arrays to contain invalid JSON data', () => {
      expect(
        isJsonData([
          '',
          1,
          false,
          undefined,
          [2, true, { x: () => {} }],
          { a: 0 },
        ]),
      ).toEqual(false);
    });
    it('does not allow objects to contain invalid JSON data', () => {
      expect(
        isJsonData({
          a: '',
          b: [3, '', false],
          c: false,
          d: undefined,
          e: [4, { e: 0 }, () => {}],
          f: { f: [{}] },
        }),
      ).toEqual(false);
    });
  });
});
