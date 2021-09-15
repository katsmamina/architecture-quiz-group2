// keep this file!  it works and you will need it

// keep this import statement
import { initializeState } from '../../business-logic/initialize-state.js';

// you can remove the rest of them
// import { get } from '../../business-logic/get.js';
// import { getSorted } from '../../business-logic/get-sorted.js';

// import { numberInputComponent } from '../components/number-input.js';
// import { listComponent } from '../components/list.js';

// keep this function! it works and you will need it
export const initializeApp = async () => {
  // this works! you will only need to change the name of the .json file
  await initializeState();

  // you can remove this code to make room for your app
  // const inputValue = get('input');
  // const numberInputEl = numberInputComponent(inputValue);
  // document.getElementById('input-root').appendChild(numberInputEl);

  // const unsortedNumbers = get('numbers');
  // const unsortedRoot = document.getElementById('unsorted');
  // unsortedRoot.innerHTML = `unsorted:`;
  // unsortedRoot.appendChild(listComponent(unsortedNumbers));

  // const sortedNumbers = getSorted();
  // const sortedRoot = document.getElementById('sorted');
  // sortedRoot.innerHTML = `sorted:`;
  // sortedRoot.appendChild(listComponent(sortedNumbers));
};
