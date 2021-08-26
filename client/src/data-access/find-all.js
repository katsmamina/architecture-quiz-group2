import { getItem } from './local-storage/get-item.js';
import { state } from './local-storage/state.js';

/**
 *
 * @returns
 */
export const findAll = () => {
  const entries = Object.keys(state()).map((key) => ({
    key,
    value: getItem(key),
  }));

  console.groupCollapsed(`: read all:`, entries);
  console.trace('state:', state());
  console.groupEnd();

  return entries;
};
