import { load } from '../data-access/load.js';

export const initializeState = async (pathToData = '', meta = { url: '' }) => {
  await load(pathToData, meta);
};
