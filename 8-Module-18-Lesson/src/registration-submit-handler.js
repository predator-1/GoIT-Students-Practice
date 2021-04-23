import { saveUser } from './dataBase';
import $ from 'jquery';

export default function () {
  const regForm = document.forms.RegForm;
  regForm.addEventListener('submit', e => {
    e.preventDefault();
    submit(e.target);
  });
}

const submit = form => {
  const email = form.querySelector('input[name=email]');
  console.log(email.value);

  const password = form.querySelector('input[name=password]');
  console.log(password.value);

  const passwordCheck = form.querySelector('input[name=password-check]');
  console.log(passwordCheck.value);

  const agree = form.querySelector('input[name=agree]');
  console.log(agree.checked);

  if (password.value === passwordCheck.value && agree.checked) {
    saveUser(email.value, password.value);
    document.querySelector('#toast-user').textContent = email.value;
    email.value = '';
    password.value = '';
    passwordCheck.value = '';
    agree.checked = false;
    $('.toast').toast('show');
  }
};
