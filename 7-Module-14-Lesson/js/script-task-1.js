/**
 * Create email field validation after pressing Enter
 * Prevent closing window
 */

const inputRef = document.querySelector('#email-input');
const errorRef = document.querySelector('#error-text');

inputRef.addEventListener('keypress', e => {
  if (e.code === 'Enter') {
    if (e.target.value.includes('@')) {
      errorRef.style.display = 'none';
    } else {
      errorRef.style.display = 'block';
    }
  }
});

// window.onbeforeunload = function () {
//   return 'Are you sure?';
// };
