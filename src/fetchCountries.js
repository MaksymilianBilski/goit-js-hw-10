const input = document.querySelector('input#search-box');
const URL_COUNTRIES_API = 'https://restcountries.com/v3.1/name/';

function fetchCountries(name) {
  return fetch(URL_COUNTRIES_API + name).then(response => response.json());
}

export { fetchCountries };

// const input = document.querySelector('input[type=text]');
// const list = document.querySelector('.country-list');
// const DATABASE2 = 'https://restcountries.com/v3.1/name/';
// import { Notify } from '../node_modules/notiflix/build/notiflix-notify-aio';

// function fetchCountries(name) {
//   name = input.value.trim();
//   if (list.childNodes.length > 0) {
//     list.innerHTML = '';
//   }
//   fetch(DATABASE2 + name)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       console.log(data.status);
//       console.log(data);
//       if (data.length > 10) {
//         return Notify.failure(
//           'Too many matches found. Please enter a more specific name.'
//         );
//       } else if (input.value.length === 0) {
//         return;
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
//             <img src="${country.flags.svg}" width="20" height="20">
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
//       if (data.status === 404) {
//         console.log(data);
//         return Notify.failure('Oops, there is no country with that name');
//       }
//     })
//     .catch(data => {
//       return Notify.failure('failed to load the resources');
//     });
// }
// export { fetchCountries };
