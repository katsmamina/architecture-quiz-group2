import { store } from './store.js';

export const removeItem = (key = '') => {
  store.removeItem(key);
};
