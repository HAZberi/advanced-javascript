'use strict';

//Getting an array of the capital of three countires

const getJson = function (url) {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error('Location Not Found');
    return res.json();
  });
};

//Handling promises one by one here
/* const get3Countries = async function (c1, c2, c3) {
  try {
    const data1 = await getJson(`https://restcountries.eu/rest/v2/name/${c1}`);
    const data2 = await getJson(`https://restcountries.eu/rest/v2/name/${c2}`);
    const data3 = await getJson(`https://restcountries.eu/rest/v2/name/${c3}`);
    return [data1[0].capital, data2[0].capital, data3[0].capital]
  } catch (err) {
    console.error(`${err.message}`);
  }
}; */

//Handling promises in parallel with promise.all

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJson(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJson(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJson(`https://restcountries.eu/rest/v2/name/${c3}`)
//     ]);
//     return data.map(d => d[0].capital)
//   } catch (err) {
//     throw new Error(err);
//   }
// };

(async function(){
  try {
    const [data] = await Promise.race([
      getJson(`https://restcountries.eu/rest/v2/name/bharat`),
      getJson(`https://restcountries.eu/rest/v2/name/libya`),
      getJson(`https://restcountries.eu/rest/v2/name/morocco`)
    ]);
    console.log(data);

  }catch (err){
    console.log(err);
  }
})();

(async function(){
  try {
    const data = await Promise.allSettled([
      Promise.resolve('Success'),
      Promise.reject('Error'),
      Promise.resolve('Success')
    ]);
    console.log(data);

  }catch (err){
    console.log(err);
  }
})();

(async function(){
  try {
    const data = await Promise.any([
      Promise.resolve('Success'),
      Promise.reject('Error'),
      Promise.resolve('Success')
    ]);
    console.log(data);

  }catch (err){
    console.log(err);
  }
})();