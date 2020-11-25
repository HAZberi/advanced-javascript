'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const displayCountries = function (data, className = '') {
  const html = `        
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(2)}M</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
            </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

const handlErr = function (err) {
  const message = `Sorry ${err.message}`;
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function () {
  try {
    //Getting position from a geolocation api
    const pos = await getPosition();
    const { latitude, longitude } = pos.coords;
    //Reverse Geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json`
    );
    if (!resGeo.ok) throw new Error('Location Data Not Found');
    const dataGeo = await resGeo.json();
    //Getting the country
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Country Not Found');
    const [data] = await res.json();
    displayCountries(data);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    //console.error(`${err.message} 💥💥💥`);
    handlErr(err);
    throw new Error(err);
  }
};
//btn.addEventListener('click', () => whereAmI());


/////////////////Handling Async Function with then/catch Old approach//////
/* console.log('1: Getting Location Data');
whereAmI()
  .then(res => console.log(`2: ${res}`))
  .catch(err => console.error(`2: ${err.message}`))
  .finally(() => console.log('3: Finished Getting Location')); */

/////////////////Handling Async with await using iife/////////
console.log('1: Getting Location Data');
(async function(){
  try{
    const myLocation = await whereAmI();
    console.log(`2: ${myLocation}`);
  }catch (err){
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished Getting Location');
})();
