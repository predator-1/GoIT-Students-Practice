/**
 * Create infinity scroll of countries with IntersectionObserver
 */
const COUNTRIES_SEGMENT_COUNT = 10;
let currentIndex = 0;

const listRef = document.querySelector('.country-list');
const anchorRef = document.querySelector('.anchor');

const observer = new IntersectionObserver(observerCallback, {
  threshold: 0,
});

observer.observe(anchorRef);

function observerCallback([entrie], observerRef) {
  if (!entrie.isIntersecting) return;

  renderPartOfCountries();

  if (currentIndex >= countries.length) {
    observerRef.unobserve(anchorRef);
  }
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
