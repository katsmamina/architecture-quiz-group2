/**
 * Checks if a value is a plain old object, not an instance of something else.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} Whether or not the value is a plain JS object.
 */
export const isPlainObject = (value) => {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
};
