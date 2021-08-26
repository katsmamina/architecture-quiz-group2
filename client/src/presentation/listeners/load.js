// keep this file!  you will need it

import { initializeApp } from '../handlers/initialize-app.js';

export const loadListener = () => {
  document.addEventListener('DOMContentLoaded', initializeApp);
};
