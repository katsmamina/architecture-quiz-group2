/**
 * Returns a new `addNumber` event containing the number to add.
 *
 * @param {number} newNumber - The number to add.
 * @returns {CustomEvent#addNumber} - An `addNumber` event with your number.
 */
export const addNumberEvent = (newNumber = 0) => {
  return new CustomEvent('addNumber', {
    bubbles: true,
    detail: { number: newNumber },
  });
};
