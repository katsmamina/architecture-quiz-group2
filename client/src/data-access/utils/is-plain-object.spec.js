import { isPlainObject } from './is-plain-object.js';

describe('isPlainObject: checks if a value is a plain old JavaScript object', () => {
  describe('it accepts POJOs declared in different ways', () => {
    it('accepts object literals', () => {
      expect(isPlainObject({})).toEqual(true);
    });
    it('accepts instances of Object', () => {
      /* eslint-disable */
      expect(isPlainObject(new Object())).toEqual(true);
    });
    it('accepts the return value of Object', () => {
      expect(isPlainObject(Object())).toEqual(true);
    });
  });
  describe('it rejects other reference types', () => {
    it('rejects functions', () => {
      expect(isPlainObject(() => {})).toEqual(false);
    });
    it('rejects arrays', () => {
      expect(isPlainObject([])).toEqual(false);
    });
    it('rejects the Object constructor', () => {
      expect(isPlainObject(Object)).toEqual(false);
    });
    it('rejects date instances', () => {
      expect(isPlainObject(new Date())).toEqual(false);
    });
    it('rejects the Date constructor', () => {
      expect(isPlainObject(Date)).toEqual(false);
    });
    // ...
  });
  describe('it rejects primitives', () => {
    it('rejects strings', () => {
      expect(isPlainObject('')).toEqual(false);
    });
    it('rejects numbers', () => {
      expect(isPlainObject(4)).toEqual(false);
    });
    it('rejects booleans', () => {
      expect(isPlainObject(true)).toEqual(false);
    });
    it('rejects null', () => {
      expect(isPlainObject(null)).toEqual(false);
    });
    it('rejects undefined', () => {
      expect(isPlainObject(undefined)).toEqual(false);
    });
    it('rejects symbols', () => {
      expect(isPlainObject(Symbol('symbol!'))).toEqual(false);
    });
  });
});
