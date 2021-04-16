/**
 * Add lazy loading to images
 */

const refs = {
  progress: document.querySelector('.progress'),
  sections: document.querySelector('.sections'),
  sectionList: document.querySelectorAll('.section'),
};

refs.progress.value = refs.sections.clientHeight;
refs.progress.max = refs.sections.scrollHeight;

refs.sections.addEventListener('scroll', handleScroll);

function handleScroll(e) {
  refs.progress.value = e.target.scrollTop + refs.sections.clientHeight;
}

const options = {
  threshold: 0.2,
};

const sectionObserver = new IntersectionObserver(onEntry, options);

refs.sectionList.forEach(s => sectionObserver.observe(s));

function onEntry(etries) {
  etries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const { id } = entry.target.dataset;

    const img = entry.target.querySelector('img');

    const { url } = img.dataset;

    img.src = url;

    const prev = document.querySelector('li.active');
    if (prev) {
      prev.classList.remove('active');
    }

    const menuItem = document.querySelector(`li[data-id="${id}"]`);
    menuItem.classList.add('active');
  });
}
