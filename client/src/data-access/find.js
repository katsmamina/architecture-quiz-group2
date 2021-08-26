import { state } from './local-storage/state.js';
import { getItem } from './local-storage/get-item.js';

/**
 *
 * @param {*} key
 * @returns
 */
export const find = (key = '') => {
  if (typeof key !== 'string') {
    throw new TypeError('key is not a string');
  }

  if (key in state()) {
    const value = getItem(key);

    console.groupCollapsed(`: find "${key}":`, value);
    console.trace('state:', state());
    console.groupEnd();

    return value;
  }

  throw new ReferenceError(`cannot find: key "${key}" does not exist`);
};
