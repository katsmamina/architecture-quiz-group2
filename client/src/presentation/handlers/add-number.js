import { addNumber } from '../../business-logic/add-number.js';
import { get } from '../../business-logic/get.js';
import { set } from '../../business-logic/set.js';
import { getSorted } from '../../business-logic/get-sorted.js';

import { listComponent } from '../components/list.js';

export const addNumberHandler = (event) => {
  // read user input
  const newNumber = event.detail.number;

  // update state
  addNumber(newNumber);

  // read state
  const unsortedNumbers = get('numbers');
  const sortedNumbers = getSorted();

  // update state
  set('input', newNumber);

  // update the UI
  const unsortedRoot = document.getElementById('unsorted');
  unsortedRoot.innerHTML = `unsorted:`;
  unsortedRoot.appendChild(listComponent(unsortedNumbers));

  const sortedRoot = document.getElementById('sorted');
  sortedRoot.innerHTML = `sorted:`;
  sortedRoot.appendChild(listComponent(sortedNumbers));
};
