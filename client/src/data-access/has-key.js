import { state } from './local-storage/state.js';

/**
 *
 * @param {*} key
 * @returns
 */
export const hasKey = (key = '') => {
  if (typeof key !== 'string') {
    throw new TypeError('key is not a string');
  }

  const doesIncludeKey = key in state();

  console.groupCollapsed(`: includes "${key}:"`, doesIncludeKey);
  console.trace('state:', state());
  console.groupEnd();

  return doesIncludeKey;
};
