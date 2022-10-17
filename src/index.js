import debounce from 'lodash';
import { Notify } from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
const input = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

function singleMarkup(data) {
  const langArr = [];
  const lang = Object.values(data[0].languages);
  console.log(lang);
  for (let i = 0; i < lang.length; i++) {
    langArr.push(lang[i]);
  }
  console.log(langArr);
  return countryInfo.insertAdjacentHTML(
    'afterbegin',
    `<li style="list-style: none;">
             <div style="display: flex;"><img src="${data[0].flags.svg}" width="60" height="60">
               <h1>${data[0].name.common} </h1></div>
             <div style="display:flex;"><h2>Capital: </h2><p class="data-details" style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${data[0].capital}</p></div>
               <div style="display:flex;"><h2>Population: </h2><p class="data-details" style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${data[0].population} </p></div>
           <div style="display:flex;"><h2>Languages: </h2><p class="data-details" style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${langArr}</p></div>
           </li>`
  );
}

function multipleMarkup(data) {
  for (const item of data) {
    countryList.insertAdjacentHTML(
      'afterbegin',
      `<li>
            <img src="${item.flags.svg}" width="20" height="20">
              ${item.name.common}
          </li>`
    );
  }
}

function clearMarkup() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}

// function to search and make certain markups
function fetch(e) {
  const name = e.target.value;
  clearMarkup();
  if (name.length === 0) {
    return Notify.failure('empty field!');
  }

  fetchCountries(name)
    .then(data => {
      if (data.length > 10) {
        return Notify.failure(
          'Too many matches found. Please enter a more specific name.'
        );
        // adding single and multiple markups    vv
      } else if (data.length >= 2 && data.length < 10) {
        multipleMarkup(data);
      }
      if (data.length === 1) {
        singleMarkup(data);
      }
    })
    .catch(err => {
      Notify.failure('failed to load resources');
    });
}

input.addEventListener('input', debounce(fetch, DEBOUNCE_DELAY));

// import { add, debounce } from 'lodash';
// import './css/styles.css';
// import { fetchCountries } from './fetchCountries';

// const input = document.querySelector('input[type=text]');
// const list = document.querySelector('.country-list');
// list.style.listStyle = 'none';

// const DEBOUNCE_DELAY = 300;

// input.addEventListener(
//   'input',
//   debounce(() => {
//     fetchCountries();
//   }, DEBOUNCE_DELAY)
// );
