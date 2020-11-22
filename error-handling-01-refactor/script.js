'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////// Using Catch, Finally, THROW /////////////////////

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

const handlErr = function (err) {
  console.log(err);
  return `Something went wrong. ${err.message} Shitt Mannn 😲😲😲`;
};

const getJson = function (url, err) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${err} : NOT FOUND ${response.status} `);
    return response.json();
  });
};

/* const getCountryInfo = function (country) {
  getJson(`https://restcountries.eu/rest/v2/name/${country}`, `${country}`).then(([data]) => {
      displayCountries(data);
      const neighbour = data.borders[0];
      if (!(data.borders.length <= 1))
        throw new Error(
          `${country[0].toUpperCase()}${country.slice(1)} has NO neighbours!!`
        );
      //then method always return the promises so always return from last then()
      return getJson(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        `${neighbour}`
      );
    })
    .then(data => {
      displayCountries(data, 'neighbour');
    })
    .catch(err =>
      countriesContainer.insertAdjacentText('beforeend', handlErr(err))
    )
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}; */

/////////////////////////////////////MY Own Challenge///////////

const getCountryInfo = function (country) {
  getJson(`https://restcountries.eu/rest/v2/name/${country}`, `${country}`)
    .then(([data]) => {
      displayCountries(data);
      if (!(data.borders.length >= 1))
        throw new Error(
          `${country[0].toUpperCase()}${country.slice(1)} has NO neighbours!!`
        );
      //then method always return the promises so always return from last then()
      data.borders.forEach(neighbour => {
        getJson(
          `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
          `${neighbour}`
        )
        .then(data => {
          displayCountries(data, 'neighbour');
        })
        .catch(err =>
          countriesContainer.insertAdjacentText('beforeend', handlErr(err))
        )
        .finally(() => {
          countriesContainer.style.opacity = 1;
        });  
      });    
    })
};

btn.addEventListener('click', e => getCountryInfo('china'));