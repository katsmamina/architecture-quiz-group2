import { addNumberHandler } from '../handlers/add-number.js';

export const addNumberListener = () => {
  document
    .getElementById('input-root')
    .addEventListener('addNumber', addNumberHandler);
};
