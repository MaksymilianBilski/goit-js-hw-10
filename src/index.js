// import { debounce } from 'lodash';
// import { Notify } from 'notiflix';
// import './css/styles.css';
// import { fetchCountries } from './fetchCountries';
// const input = document.querySelector('input#search-box');
// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');
// const DEBOUNCE_DELAY = 300;

// function singleMarkup(data) {
//   const langArr = [];
//   const lang = Object.values(data[0].languages);
//   for (let i = 0; i < lang.length; i++) {
//     langArr.push(lang[i]);
//   }
//   return countryInfo.insertAdjacentHTML(
//     'afterbegin',
//     `<li style="list-style: none;">
//              <div style="display: flex;"><img src="${data[0].flags.svg}" width="60" height="60">
//                <h1>${data[0].name.common} </h1></div>
//              <div style="display:flex;"><h2>Capital: </h2><p class="data-details" style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${data[0].capital}</p></div>
//                <div style="display:flex;"><h2>Population: </h2><p class="data-details" style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${data[0].population} </p></div>
//            <div style="display:flex;"><h2>Languages: </h2><p class="data-details" style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${langArr}</p></div>
//            </li>`
//   );
// }

// function multipleMarkup(data) {
//   for (const item of data) {
//     countryList.insertAdjacentHTML(
//       'afterbegin',
//       `<li style="list-style: none;">
//             <img src="${item.flags.svg}" width="20" height="20">
//               ${item.name.common}
//           </li>`
//     );
//   }
// }

// function clearMarkup() {
//   countryInfo.innerHTML = '';
//   countryList.innerHTML = '';
// }

// // function to search and make certain markups
// function fetch(e) {
//   const name = e.target.value.trim();
//   clearMarkup();
//   if (name.length === 0) {
//     return Notify.failure('empty field!');
//   }

//   fetchCountries(name)
//     .then(data => {
//       if (data.length > 10) {
//         return Notify.failure(
//           'Too many matches found. Please enter a more specific name.'
//         );
//         // adding single and multiple markups    vv
//       } else if (data.length >= 2 && data.length < 10) {
//         multipleMarkup(data);
//       } else if (data.length === 1) {
//         singleMarkup(data);
//       } else if (data.status === 404) {
//         Notify.failure('Oops, there is no country with that name');
//       }
//     })
//     .catch(err => {
//       Notify.failure('failed to load resources');
//     });
// }

// input.addEventListener('input', debounce(fetch, DEBOUNCE_DELAY));

//2 metoda
import { debounce } from 'lodash';
import { Notify } from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
const input = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;
const body = document.querySelector('body');
body.style.backgroundColor = '#C4A484';
const URLINFO = 'https://en.wikipedia.org/wiki/';

function fetch(e) {
  e.preventDefault();
  return fetchCountries(input.value.trim())
    .then(country => {
      if (
        countryInfo.childNodes.length > 0 ||
        countryList.childNodes.length > 0
      ) {
        clearMarkup();
      }
      if (input.value.length === 0) {
        return;
      }
      if (country.message === 'Page Not Found') {
        Notify.failure('Oops, there is no country with that name');
      }
      if (country.length === 1) {
        singleMarkup(country);
      }
      if (country.length > 1 && country.length <= 10) {
        renderMarkups(country);
      }
      if (country.length > 10) {
        Notify.failure(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => {
      console.log(error.message);
    });
}

function clearMarkup() {
  if (countryList.length !== 0 || countryInfo.length !== 0) {
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
  }
}

function singleMarkup(response) {
  const key = Object.keys(response[0].languages);
  countryInfo.insertAdjacentHTML(
    'afterbegin',
    `<li style="list-style: none;">
             <div style="display: flex;"><a href="${
               URLINFO + response[0].name.common
             }"><img src="${response[0].flags.svg}" width="60" height="60"></a>
               <h1>${response[0].name.common} </h1></div>
             <div style="display:flex;"><h2>Capital: </h2><p class="data-details" style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${
               response[0].capital
             }</p></div>
               <div style="display:flex;"><h2>Population: </h2><p class="data-details" style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${
                 response[0].population
               } </p></div>
           <div style="display:flex;"><h2>Languages: </h2><p class="data-details" style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${key}</p></div>
           </li>`
  );
}

function renderMarkups(response) {
  response.forEach(response => {
    countryList.insertAdjacentHTML(
      'afterbegin',
      `<ul style="list-style:none;"><li style="font-size: 30px; font-weight: 700; display: flex; align-content: cener;"><a href="https://en.wikipedia.org/wiki/${response.name.common}" ><img style="width:40px; height: 40px;"src="${response.flags.svg}"></a>${response.name.official}</li>
          <li style="display: flex;"><h2>Capital: </h2><p style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${response.capital}</p></li>`
    );
  });
}

input.addEventListener('input', debounce(fetch, DEBOUNCE_DELAY));
