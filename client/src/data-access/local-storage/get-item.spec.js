import { getItem } from './get-item.js';

describe('getItem: reads a key from localStorage, parsing from JSON if possible', () => {
  beforeEach(() => {
    Object.keys(localStorage).forEach((key) => localStorage.removeItem(key));
  });

  describe('when a serializeable value has been stringified, it will be parsed', () => {
    it('reads strings', () => {
      localStorage.setItem('a', JSON.stringify('"hello"'));
      expect(getItem('a')).toEqual('"hello"');
    });
    it('reads numbers', () => {
      localStorage.setItem('a', JSON.stringify(12));
      expect(getItem('a')).toEqual(12);
    });
    it('reads booleans', () => {
      localStorage.setItem('a', JSON.stringify(true));
      expect(getItem('a')).toEqual(true);
    });
    it('reads null', () => {
      localStorage.setItem('a', JSON.stringify(null));
      expect(getItem('a')).toEqual(null);
    });
    it('reads arrays', () => {
      localStorage.setItem('a', JSON.stringify([1, 'h', true, null]));
      expect(getItem('a')).toEqual([1, 'h', true, null]);
    });
    it('reads objects', () => {
      localStorage.setItem('a', JSON.stringify({ a: 1, b: 'h', c: true }));
      expect(getItem('a')).toEqual({ a: 1, b: 'h', c: true });
    });
  });

  describe('all others will be read as localStorage stores them (.toString)', () => {
    it('reads strings', () => {
      localStorage.setItem('a', '"hello"');
      // prettier-ignore
      expect(getItem('a')).toEqual("hello");
    });
    it('reads numbers', () => {
      localStorage.setItem('a', 12);
      expect(getItem('a')).toEqual(12);
    });
    it('reads booleans', () => {
      localStorage.setItem('a', true);
      expect(getItem('a')).toEqual(true);
    });
    it('reads null', () => {
      localStorage.setItem('a', null);
      expect(getItem('a')).toEqual(null);
    });
    it('reads arrays', () => {
      localStorage.setItem('a', [1, 'h', true, null]);
      expect(getItem('a')).toEqual('1,h,true,');
    });
    it('reads objects', () => {
      localStorage.setItem('a', { a: 1, b: 'h', c: true });
      expect(getItem('a')).toEqual('[object Object]');
    });
    it('reads undefined', () => {
      localStorage.setItem('a', undefined);
      expect(getItem('a')).toEqual('undefined');
    });
    it('reads functions', () => {
      localStorage.setItem('a', () => {});
      expect(getItem('a')).toEqual('() => {}');
    });
  });
});
