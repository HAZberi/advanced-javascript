'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////// Using Catch and Finally /////////////////////

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
};

//////////////////////Shorter ES6 Syntax /////////////////////////////
const handlErr = function (err) {
  countriesContainer.insertAdjacentText(
    'beforeend',
    `Something went wrong. ${err.message} Shitt Mannn 😲😲😲`
  );
};

const getCountryInfo = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(([data]) => {
      displayCountries(data);
      const neighbour = data.borders[0];
      //then method always return the promises so always return from last then()
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      displayCountries(data, 'neighbour');
    })
    .catch(err => handlErr(err))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', e => getCountryInfo('paktan'));
