const template = value => `
    <div class="timer">
        <span class="value">${value}</span>
        <div class="buttons">
            <button class="button start">Start</button>
            <button class="button stop" disabled>Stop</button>
        </div>
    </div>
`;

export default function Timer({ selector }) {
  this.value = 0;
  this._id = 0;

  document
    .querySelector(selector)
    .insertAdjacentHTML('beforeend', template(this.value));

  const refs = {
    value: document.querySelector(`${selector} .value`),
    stop: document.querySelector(`${selector} .stop`),
    start: document.querySelector(`${selector} .start`),
  };

  this.stop = () => {
    clearInterval(this._id);
    this._id = 0;
    refs.stop.setAttribute('disabled', true);
    refs.start.removeAttribute('disabled');
  };

  this.start = () => {
    if (this._id) {
      return;
    }

    this._id = setInterval(() => {
      refs.value.textContent = this.value += 1;
    }, 100);

    refs.start.setAttribute('disabled', true);
    refs.stop.removeAttribute('disabled');
  };

  refs.start.addEventListener('click', this.start);
  refs.stop.addEventListener('click', this.stop);
}
