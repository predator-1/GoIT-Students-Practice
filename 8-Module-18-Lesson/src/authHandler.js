import { isUserValid } from './dataBase';
import $ from 'jquery';

export default function () {
  document.forms.AuthForm.addEventListener('submit', e => {
    e.preventDefault();
    submit(e.target);
  });
}

const submit = form => {
  const email = form.querySelector('input[name=email]');
  console.log(email.value);

  const password = form.querySelector('input[name=password]');
  console.log(password.value);

  if (isUserValid(email.value, password.value)) {
    $('.toast').toast('show');
  }
};
