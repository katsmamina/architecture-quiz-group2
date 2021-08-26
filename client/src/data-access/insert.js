import { setItem } from './local-storage/set-item.js';
import { state } from './local-storage/state.js';

import { isJsonData } from './utils/is-json-data.js';

/**
 *
 * @param {*} key
 * @param {*} value
 */
export const insert = (key = '', value) => {
  if (typeof key !== 'string') {
    throw new TypeError('key is not a string');
  }

  if (!isJsonData(value)) {
    throw new TypeError(`cannot update: new value is not JSON data.

only these types are allowed:
- string
- number
- boolean
- null
- arrays
- objects`);
  }

  if (key in state()) {
    throw new ReferenceError(`cannot insert: key "${key}" already exists`);
  } else {
    setItem(key, value);

    console.groupCollapsed(`: insert "${key}:"`, value);
    console.trace('new state:', state());
    console.groupEnd();
  }
};
