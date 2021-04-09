/**
 * Crete page with images in modal window
 * User can change image with button <- and ->
 */

const images = document.querySelectorAll('.promo-image');
const modalRef = document.getElementById('modal-window');
const modalContentRef = document.getElementById('modal-content');
const imagesSrc = [];
images.forEach(el => {
  imagesSrc.push(el.getAttribute('data-source'));
  el.addEventListener('click', function (e) {
    modalRef.style.display = 'block';
    modalContentRef.src = this.getAttribute('data-source');
  });
});

const closeRef = document.querySelector('.close');
closeRef.addEventListener('click', () => {
  modalRef.style.display = 'none';
});

document.addEventListener('keydown', e => {
  let newIndex = imagesSrc.indexOf(modalContentRef.src);
  if (newIndex < 0) {
    return;
  }
  if (e.code === 'ArrowLeft') {
    newIndex -= 1;
    if (newIndex === -1) {
      newIndex = imagesSrc.length - 1;
    }
  } else if (e.code === 'ArrowRight') {
    newIndex += 1;
    if (newIndex === imagesSrc.length) {
      newIndex = 0;
    }
  }
  modalContentRef.src = imagesSrc[newIndex];
});
