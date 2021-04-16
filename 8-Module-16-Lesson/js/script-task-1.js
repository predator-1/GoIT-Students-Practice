/**
 * Create infinity scroll of countries
 */

const COUNTRIES_SEGMENT_COUNT = 10;
let currentIndex = 0;

const listRef = document.querySelector('.country-list');

window.addEventListener('scroll', _.throttle(scrollHandler, 200));

function scrollHandler() {
  if (!isScrolledToBottom()) return;

  renderPartOfCountries();

  if (currentIndex >= countries.length) {
    window.removeEventListener('scroll', scrollHandler);
  }
}

function isScrolledToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function renderPartOfCountries() {
  const partOfCountries = countries
    .slice(currentIndex, currentIndex + COUNTRIES_SEGMENT_COUNT)
    .map(createCountryElement);

  listRef.append(...partOfCountries);
  currentIndex += COUNTRIES_SEGMENT_COUNT;
}

function createCountryElement(country) {
  const countryElement = document.createElement('h2');
  countryElement.classList.add('country');
  countryElement.textContent = country;
  return countryElement;
}

renderPartOfCountries();
