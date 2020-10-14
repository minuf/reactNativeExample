export const productService = {
    getAll
}

function getAll() {
  const DATA = require('../mock/mockedProducts.json');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(DATA);
      }, 1000);
  })
}