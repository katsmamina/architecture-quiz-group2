export const store = (() => {
  try {
    return localStorage;
  } catch (err) {
    const data = {};

    const getItem = (key = '') => {
      return key in data ? data[key] : null;
    };
    const removeItem = (key = '') => {
      delete data[key];
    };
    const setItem = (key = '', value) => {
      data[key] = String(value);
    };
    const clear = () => {
      Object.keys(data).forEach((key) => delete data[key]);
    };

    return {
      getItem,
      removeItem,
      setItem,
      clear,
    };
  }
})();
