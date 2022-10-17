import debounce from 'lodash';
import { fetchCountries } from './fetchCountries';
import './css/styles.css';
const DEBOUNCE_DELAY = 300;
const input = document.querySelector('input[type=text]');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

function singleMarkup() {
  countryInfo.insertAdjacentHTML(
    'afterbegin',
    `<li>
    <img src="${country.flags.svg}" width="20" height="20">${country.name.common} </li>`
  );
}

function searchInput(e) {
  console.log('kurwa mac');
  const searchInput = e.target.value.trim();
  console.log(searchInput);
  fetchCountries(input).then(data => {
    console.log(data);
  });
}

function multipleMarkup() {}

input.addEventListener(
  'input',
  debounce(() => {
    searchInput();
  }, DEBOUNCE_DELAY)
);

input.addEventListener('input', e => {
  console.log(e.target.value);
});
