'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

////Old School AJAX - XMLHttpRequest format + Callback Hell
/* 
const displayCountryInfo = function (data, className = '') {
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

const getCountryInfo = function (country) {
  const requestData = new XMLHttpRequest();
  requestData.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  requestData.send(); //Async Call
  //Once recieved -- listen for load and do something
  requestData.addEventListener('load', function (e) {
    //Callback 1
    //using destructuring to get the relevant objects
    const [data] = JSON.parse(requestData.responseText);
    console.log(data);
    displayCountryInfo(data);
    const requestData2 = new XMLHttpRequest();
    requestData2.open(
      'GET',
      `https://restcountries.eu/rest/v2/alpha/${data.borders[0]}`
    );
    requestData2.send();
    requestData2.addEventListener('load', function (e) {
      //Callback 2
      const data2 = JSON.parse(requestData2.responseText);
      console.log(data2);
      displayCountryInfo(data2, 'neighbour');
      const requestData3 = new XMLHttpRequest();
      requestData3.open(
        'GET',
        `https://restcountries.eu/rest/v2/alpha/${data.borders[1]}`
      );
      requestData3.send();
      requestData3.addEventListener('load', function (e) {
        //Callback 3
        const data3 = JSON.parse(requestData3.responseText);
        console.log(data3);
        displayCountryInfo(data3, 'neighbour');
      });
    });
  });
};

getCountryInfo('pakistan'); */

//////////////////My own neighbouring country challenge! Display All neighbours///////////////////

const displayCountryInfo = function (data, className = '') {
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
  
  const getCountryInfo = function (country) {
    const requestData = new XMLHttpRequest();
    requestData.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    requestData.send(); //Async Call
    //Once recieved -- listen for load and do something
    requestData.addEventListener('load', function (e) {
      //Callback 1
      //using destructuring to get the relevant objects
      const [data] = JSON.parse(requestData.responseText);
      console.log(data);
      displayCountryInfo(data);
      data.borders.forEach((neighbour, i)=>{
        const requestData2 = new XMLHttpRequest();
        requestData2.open(
          'GET',
          `https://restcountries.eu/rest/v2/alpha/${data.borders[i]}`
        );
        requestData2.send();
        requestData2.addEventListener('load', function (e) {
          //Callback 2
          const data2 = JSON.parse(requestData2.responseText);
          console.log(data2);
          displayCountryInfo(data2, 'neighbour');
        });
      });
    });
  };
  
  getCountryInfo('burma'); 