// import { Notify } from '../node_modules/notiflix/build/notiflix-notify-aio';
// import { DATABASE, input, list } from './index';
// list.style.listStyle = 'none';

// function fetchCountries(name) {
//   name = input.value.trim();
//   if (list.childNodes.length > 0) {
//     list.innerHTML = '';
//   }
//   fetch(DATABASE + name)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       if (data.length > 10) {
//         return Notify.failure(
//           'Too many matches found. Please enter a more specific name.'
//         );
//       }
//       if (data.lenght >= 2 || data.length <= 10) {
//         for (const country of data) {
//           let arrLang = [];
//           for (lang in country.languages) {
//             arrLang.push(lang);
//           }
//           list.insertAdjacentHTML(
//             'afterbegin',
//             `<li>
//            <img src="${country.flags.svg}" width="20" height="20">
//               ${country.name.common}
//             </li>`
//           );
//         }
//       }
//       if (data.length === 1) {
//         list.innerHTML = '';
//         for (const country of data) {
//           let arrLang = [];
//           for (lang in country.languages) {
//             arrLang.push(lang);
//           }
//           list.insertAdjacentHTML(
//             'afterbegin',
//             `<li>
//             <div style="display: flex;"><img src="${country.flags.svg}" width="60" height="60">
//               <h1>${country.name.common} </h1></div>
//              <div style="display:flex;"><h2>Capital: </h2><p class="data-details" style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${country.capital}</p></div>
//               <div style="display:flex;"><h2>Population: </h2><p class="data-details" style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${country.population} </p></div>
//               <div style="display:flex;"><h2>Languages: </h2><p class="data-details" style="font-size: 21px; font-weight: 500; padding-top: 2px; padding-left: 12px;">${arrLang}</p></div>
//             </li>`
//           );
//         }
//       }
//     })
//     .catch(data => {
//       if (input.value.length === 0) {
//         return;
//       } else return Notify.failure('failed to load the resources!');
//     });
// }

// export { fetchCountries };
const API_COUNTRY_URL = 'https://restcountries.com/v3.1/name/';

function fetchCountries(name) {
  fetch(
    API_COUNTRY_URL +
      `${name}` +
      `?fields=name,capital,population,flags,languages`
  )
    .then(data => data.json())
}
export { fetchCountries };
