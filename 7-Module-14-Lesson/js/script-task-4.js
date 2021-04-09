/**
 * Create TODO list
 */

const getTask = () => {
  let counterId = 0;
  const createTask = text => `
    <li data-id="${(counterId += 1)}">
        <span>${text}</span>
        <button type="button" class="done" aria-label="Done">
            &radic;
        </button>
        <button type="button" class="close" aria-label="Close">
            &times;
        </button>
    </li>
    `;
  return createTask;
};

const getTaskWithCounter = getTask();

const listRef = document.querySelector('ol');
const input = document.getElementById('add-input');

document.getElementById('add-btn').addEventListener('click', () => {
  listRef.insertAdjacentHTML('beforeend', getTaskWithCounter(input.value));
  input.value = '';
  const todos = document.querySelectorAll('li');
  const currentTODO = todos[todos.length - 1];
  currentTODO.querySelector('.close').addEventListener('click', e => {
    currentTODO.remove();
  });
  const doneEvent = () => {
    currentTODO.style.background = 'green';
    currentTODO.querySelector('.done').removeEventListener('click', doneEvent);
  };
  currentTODO.querySelector('.done').addEventListener('click', doneEvent);
});
