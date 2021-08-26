import { find } from '../data-access/find.js';

export const get = (key = '') => {
  if (typeof key !== 'string') {
    throw new TypeError('argument is not a string');
  }

  const value = find(key);
  return value;
};
