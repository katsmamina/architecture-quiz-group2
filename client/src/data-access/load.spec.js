import { load } from './load.js';

import { clear } from './local-storage/clear.js';
import { state } from './local-storage/state.js';

describe('load: loads JSON data into the store from a relative path', () => {
  beforeEach(() => {
    clear();
  });

  // spec will only work where a global `fetch` is defined
  xit('loads the test data', async () => {
    await load('./test-data/something.json', import.meta);

    expect(state()).toEqual({
      aNumber: 'one',
    });
  });
});
