import { state } from './state.js';

import { clear } from './clear.js';
import { setItem } from './set-item.js';

describe('state: states an entry in the data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    clear();
  });

  it('returns an empty object if the store is empty', () => {
    expect(state()).toEqual({});
  });

  it('returns an object matching all entries at this moment', () => {
    setItem('a', 1);
    setItem('b', true);
    setItem('c', ['hello']);
    const currentState = state();
    expect(currentState).toEqual({
      a: 1,
      b: true,
      c: ['hello'],
    });
  });
});
