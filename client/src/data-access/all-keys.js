import { state } from './local-storage/state.js';

/**
 *
 * @returns
 */
export const allKeys = () => {
  const keys = Object.keys(state());

  console.groupCollapsed(`: keys:`, keys);
  console.trace('state:', state());
  console.groupEnd();

  return keys;
};
