import { addNumberEvent } from '../custom-events/add-number.js';

/**
 * Returns a number input with your initial value set.
 *
 * @param {number} initialValue - The initial value for this input.
 * @returns {HTMLInputElement} - The rendered input element.
 * @fires CustomEvent#addNumber
 */
export const numberInputComponent = (initialValue = 0) => {
  const inputEl = document.createElement('input');
  inputEl.type = 'number';
  inputEl.value = initialValue;
  inputEl.addEventListener('change', (event) => {
    event.stopPropagation();
    const newNumber = Number(inputEl.value);
    const newNumberEvent = addNumberEvent(newNumber);
    inputEl.dispatchEvent(newNumberEvent);
  });
  return inputEl;
};
