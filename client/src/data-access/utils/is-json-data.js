import { isPlainObject } from './is-plain-object.js';

/**
 * Checks if a value can be serialized to JSON.
 *
 * @param {any} thing - The value to check.
 * @returns {boolean} Whether or not the value is JSON-friendly.
 */
export const isJsonData = (thing) => {
  // is it a json-friendly primitive type?
  if (
    typeof thing === 'boolean' ||
    typeof thing === 'number' ||
    typeof thing === 'string' ||
    thing === null
  ) {
    return true;
  }

  // is it an array containing only json-friendly items?
  if (Array.isArray(thing)) {
    return thing.every((entry) => isJsonData(entry));
  }

  // is it a plain object containing only json-friendly entries?
  if (isPlainObject(thing)) {
    return Object.entries(thing).every((entry) => isJsonData(entry));
  }

  // nothing else is json-friendly!
  return false;
};
