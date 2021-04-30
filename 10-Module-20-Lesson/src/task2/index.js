'use strict';

import './styles.css';

/**
 * TODO list
 */

import LocalStorage from './storage';
import todoTemplate from './todo.hbs';

const refs = {
  form: document.querySelector('.form'),
  todoList: document.querySelector('.todo-list'),
};

const todoList = LocalStorage.load() || [];

const handleSubmit = e => {
  e.preventDefault();

  todoList.push({
    id: Date.now(),
    value: e.target.elements.text.value,
  });

  LocalStorage.save(todoList);

  e.target.elements.text.value = '';

  renderer(todoList);
};

const renderer = list => {
  refs.todoList.innerHTML = '';
  refs.todoList.insertAdjacentHTML(
    'beforeend',
    todoTemplate({
      todos: list,
    }),
  );
  for (const item of list) {
    const button = document.querySelector(`#btn-${item.id}`);
    button.addEventListener('click', () => {
      const todoListItemIndex = todoList.findIndex(i => i.id === item.id);
      if (todoListItemIndex > -1) {
        todoList.splice(todoListItemIndex, 1);
        LocalStorage.save(todoList);
        renderer(todoList);
      }
    });
  }
};

refs.form.addEventListener('submit', handleSubmit);

renderer(todoList);
