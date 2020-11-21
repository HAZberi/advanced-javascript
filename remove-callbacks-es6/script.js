'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////// The ES6 way of handling AJAX /////////////////////

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

//////////////////////Shorter ES6 Syntax /////////////////////////////
/* 
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
    .then((data) => {
      displayCountries(data, 'neighbour');
    });
};
 */
///////////////////////My own Challenge Task//////////////////////////

const getCountryInfo = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(([data]) => {
      displayCountries(data);
      data.borders.forEach(neighbour =>
        fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
          .then(response => response.json())
          .then(data => displayCountries(data, 'neighbour'))
      );
    });
};
getCountryInfo('brazil');
