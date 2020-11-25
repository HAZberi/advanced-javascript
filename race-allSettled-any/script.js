'use strict';

//Practicing race - allSettled and any Static functions on Promises

const getJson = function (url) {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error('Location Not Found');
    return res.json();
  });
};

(async function () {
  try {
    const [data] = await Promise.race([
      getJson(`https://restcountries.eu/rest/v2/name/bharat`),
      getJson(`https://restcountries.eu/rest/v2/name/libya`),
      getJson(`https://restcountries.eu/rest/v2/name/morocco`),
    ]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();

(async function () {
  try {
    const data = await Promise.allSettled([
      Promise.resolve('Success'),
      Promise.reject('Error'),
      Promise.resolve('Success'),
    ]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();

(async function () {
  try {
    const data = await Promise.any([
      Promise.resolve('Success'),
      Promise.reject('Error'),
      Promise.resolve('Success'),
    ]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();
