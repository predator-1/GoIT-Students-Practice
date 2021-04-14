'use strict';

/**
 * Create debounce and throttle
 * Write in console scroll time
 */

const div = document.querySelector('#my-id');

const handleBodyScroll = () => {
  console.log('scroll', new Date());
};

// div.addEventListener('scroll', _.throttle(handleBodyScroll, 1000));
div.addEventListener('scroll', _.debounce(handleBodyScroll, 1000));

function throttle(callback, delay) {
  let id;

  return function () {
    if (id) {
      return;
    }

    id = setTimeout(() => {
      callback();
      id = 0;
    }, delay);
  };
}

// div.addEventListener('scroll', throttle(handleBodyScroll, 1000));

function debounce(callback, delay) {
  let id;

  return function () {
    if (id) {
      clearInterval(id);
    }

    id = setTimeout(() => {
      callback();
      id = 0;
    }, delay);
  };
}

// div.addEventListener('scroll', debounce(handleBodyScroll, 1000));
