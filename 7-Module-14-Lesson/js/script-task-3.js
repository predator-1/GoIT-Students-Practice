/**
 * Show hidden popup on blur
 */

const inputRef = document.querySelector('input');
const popupRef = document.querySelector('.js-popup');
const popupText = document.querySelector('#js-popup-text');

const handleClosePopup = event => {
  if (event.code === 'Escape') {
    popupRef.classList.remove('popup_open');
    inputRef.focus();
    document.removeEventListener('keydown', handleClosePopup);
  }
};

inputRef.addEventListener('blur', function () {
  popupRef.classList.add('popup_open');
  popupText.textContent = this.value;
  document.addEventListener('keydown', handleClosePopup);
});
