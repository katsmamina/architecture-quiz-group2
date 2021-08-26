import { initializeState } from '../../business-logic/initialize-state.js';
import { get } from '../../business-logic/get.js';
import { getSorted } from '../../business-logic/get-sorted.js';

import { numberInputComponent } from '../components/number-input.js';
import { listComponent } from '../components/list.js';

export const initializeApp = async () => {
  // this works! you will only need to change the name of the .json file
  await initializeState('../../../../data/numbers.json', import.meta);

  // change code below here for your app
  const inputValue = get('input');
  const numberInputEl = numberInputComponent(inputValue);
  document.getElementById('input-root').appendChild(numberInputEl);

  const unsortedNumbers = get('numbers');
  const unsortedRoot = document.getElementById('unsorted');
  unsortedRoot.innerHTML = `unsorted:`;
  unsortedRoot.appendChild(listComponent(unsortedNumbers));

  const sortedNumbers = getSorted();
  const sortedRoot = document.getElementById('sorted');
  sortedRoot.innerHTML = `sorted:`;
  sortedRoot.appendChild(listComponent(sortedNumbers));
};
