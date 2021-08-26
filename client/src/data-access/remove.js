import { state } from './local-storage/state.js';
import { removeItem } from './local-storage/remove-item.js';

/**
 *
 * @param {*} key
 */
export const remove = (key = '') => {
  if (typeof key !== 'string') {
    throw new TypeError('key is not a string');
  }

  if (key in state()) {
    removeItem(key);

    console.groupCollapsed(`: remove "${key}"`);
    console.trace('new state:', state());
    console.groupEnd();
  } else {
    throw new ReferenceError(`cannot remove: key "${key}" does not exist`);
  }
};
