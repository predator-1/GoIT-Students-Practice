/**
 * Create country search
 */

const listRef = document.querySelector('.country-list');
const searchRef = document.querySelector('.search');

searchRef.addEventListener('input', _.debounce(inputHandler, 500));

function inputHandler(event) {
  const searchTxt = event.target.value;

  const filtredCountries =
    searchTxt === ''
      ? countries
      : countries.filter(c =>
          c.toLowerCase().startsWith(searchTxt.toLowerCase()),
        );
  redrerCountries(filtredCountries);
}

function redrerCountries(countriesArray) {
  const countriesElements = countriesArray.map(createCountryElement);
  listRef.innerHTML = '';
  listRef.append(...countriesElements);
}

function createCountryElement(country) {
  const countryElement = document.createElement('h2');
  countryElement.classList.add('country');
  countryElement.textContent = country;
  return countryElement;
}

redrerCountries(countries);
