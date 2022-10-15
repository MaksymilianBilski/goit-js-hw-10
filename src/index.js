import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const DATABASE =
  'https://restcountries.com/v2/all?fields=name,capital,currencies';

const DATABASE2 = 'https://restcountries.com/v3.1/name/';

fetch(DATABASE)
  .then(response => {
    return response.json();
  })
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
    console.log(data);
  })
  .catch(data => {
    alert('failed to load the resources!');
  });

function fetchCountry(name) {
  fetch(DATABASE2 + name)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // for (let i = 0; i < data.length; i++) {
      //   console.log(data[i].name);
      // }
      console.log(data);
    })
    .catch(data => {
      alert('failed to load the resources!');
    });
}
fetchCountry('poland');
