import { add, debounce } from 'lodash';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const input = document.querySelector('input[type=text]');
const list = document.querySelector('.country-list');
list.style.listStyle = 'none';

const DEBOUNCE_DELAY = 300;

input.addEventListener(
  'input',
  debounce(() => {
    fetchCountries();
  }, DEBOUNCE_DELAY)
);
