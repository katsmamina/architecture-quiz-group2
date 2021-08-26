import { state } from './local-storage/state.js';
import { setItem } from './local-storage/set-item.js';

import { isJsonData } from './utils/is-json-data.js';

/**
 *
 * @param {*} key
 * @param {*} newValue
 */
export const save = (key = '', newValue) => {
  if (typeof key !== 'string') {
    throw new TypeError('key is not a string');
  }

  if (!isJsonData(newValue)) {
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
    setItem(key, newValue);

    console.groupCollapsed(`: save "${key}":`, newValue);
    console.trace('new state:', state());
    console.groupEnd();
  } else {
    throw new ReferenceError(`cannot save: key "${key}" does not exist`);
  }
};
