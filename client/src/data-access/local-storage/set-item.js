import { store } from './store.js';

export const setItem = (key = '', value) => {
  store.setItem(key, JSON.stringify(value));
};
