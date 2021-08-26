import { insert } from '../data-access/insert.js';
import { save } from '../data-access/save.js';
import { hasKey } from '../data-access/has-key.js';

export const set = (key = '', value) => {
  if (typeof key !== 'string') {
    throw new TypeError('first argument is not a string');
  }

  const keyInState = hasKey(key);
  if (keyInState) {
    save(key, value);
  } else {
    insert(key, value);
  }
};
