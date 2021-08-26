import { store } from './store.js';
import { getItem } from './get-item.js';

/**
 *
 * @param {*} log
 * @returns
 */
export const state = (log = false) => {
  const storeState = Object.keys(store).reduce(
    (all, key) => Object.assign(all, { [key]: getItem(key) }),
    {},
  );

  if (log) {
    console.log(': state:', storeState);
  }

  return storeState;
};
