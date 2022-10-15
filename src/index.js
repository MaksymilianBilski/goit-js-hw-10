import { add, debounce } from 'lodash';
import './css/styles.css';
const debounce = require('lodash.debounce');
const input = document.querySelector('input[type=text]');
console.log(input);

const DEBOUNCE_DELAY = 300;
const DATABASE =
  'https://restcountries.com/v2/all?fields=name,capital,currencies';

const DATABASE2 = 'https://restcountries.com/v3.1/name/';

// fetch(DATABASE)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     // for (let i = 0; i < data.length; i++) {
//     //   console.log(data[i].name);
//     // }
//     console.log(data);
//   })
//   .catch(data => {
//     alert('failed to load the resources!');
//   });

function fetchCountries(name) {
  fetch(DATABASE2 + name)
    .then(response => {
      return response.json();
    })
    .then(data => {
      let arrLang = [];
      for (lang in data[0].languages) {
        arrLang.push(lang);
      }
      console.log(
        data[0].name.official +
          ', ' +
          data[0].capital +
          ', ' +
          data[0].population +
          ', ' +
          data[0].flags.svg +
          ', ' +
          arrLang
      );
    })
    .catch(data => {
      alert('failed to load the resources!');
    });
}
fetchCountries('belgium');

input.addEventListener(
  'click',
  debounce(() => {
    console.log('test debouncea');
  }, 300)
);
