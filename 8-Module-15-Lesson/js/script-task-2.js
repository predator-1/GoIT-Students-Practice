/**
 * Paint block when mouse on button
 */

const mouseeToggleListener = event => {
  if (event.target.classList.contains('card__delete')) {
    event.currentTarget.classList.toggle('card_focus');
  }
};

const cardRef = document.querySelector('.card');

cardRef.addEventListener('mouseover', mouseeToggleListener);
cardRef.addEventListener('mouseout', mouseeToggleListener);
