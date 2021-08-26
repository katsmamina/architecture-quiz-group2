import { store } from './store.js';

export const getItem = (key = '') => {
  const item = store.getItem(key);
  try {
    return JSON.parse(item);
  } catch {
    // in case an item was set manually without using JSON.stringify
    return item;
  }
};
