'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

////Old School AJAX - XMLHttpRequest format

/* const getCountryInfo = function(country){

    const requestData = new XMLHttpRequest();
    requestData.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    requestData.send(); //Async Call

    //Once recieved -- listen for load and do something
    requestData.addEventListener('load', function (e) {
    //using destructuring to get the relevant objects
    const [data] = JSON.parse(requestData.responseText);
    console.log(data);
    const html = `        
        <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
            data.population / 1000000
            ).toFixed(2)}M</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
    });
}

getCountryInfo('pakistan');
getCountryInfo('saudi');
getCountryInfo('canada');
getCountryInfo('great');
getCountryInfo('uae');
getCountryInfo('ukraine');
getCountryInfo('zambia'); */


//////////////////////// The ES6 way of handling AJAX /////////////////////

const displayCountries = function(data){
    const html = `        
        <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
            data.population / 1000000
            ).toFixed(2)}M</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const getCountryInfo = function(country){
    fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    });
}

getCountryInfo('pakistan');



