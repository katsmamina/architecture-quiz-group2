import { addNumberEvent } from './add-number.js';

describe('addNumberEvent: returns a custom event containing a new number', () => {
  describe('add the number 5', () => {
    const event = addNumberEvent(5);
    it('is an event', () => {
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "addNumber"', () => {
      expect(event.type).toEqual('addNumber');
    });
    it('bubbles', () => {
      expect(event.bubbles).toEqual(true);
    });
    it('details: number is 5', () => {
      expect(event.detail).toEqual({ number: 5 });
    });
  });
  describe('add the number -5', () => {
    const event = addNumberEvent(-5);
    it('is an event', () => {
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "addNumber"', () => {
      expect(event.type).toEqual('addNumber');
    });
    it('bubbles', () => {
      expect(event.bubbles).toEqual(true);
    });
    it('details: number is -5', () => {
      expect(event.detail).toEqual({ number: -5 });
    });
  });
});
