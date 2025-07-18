'use strict';
const signupBtn = document.querySelector('.login .dont-have a');
const loginBtn = document.querySelector('.signup .already-have a');
signupBtn?.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.login').classList.add('hide-me');
  document.querySelector('.signup').classList.remove('hide-me');
  document.querySelector('.send-data').style.height = '450px';
});
loginBtn?.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.login').classList.remove('hide-me');
  document.querySelector('.signup').classList.add('hide-me');
  document.querySelector('.send-data').style.height = '400px';
});
const loginForm = document.querySelector('.login form');
loginForm?.addEventListener('submit', function (e) {
  const username = document.getElementById('user-name');
  const pass = document.getElementById('pass');
  if (username.value === '' || pass.value === '') {
    e.preventDefault();
    document.querySelector('.send-data').style.height = '450px';
    const error = document.querySelector('.login .error');
    error.classList.add('show-error');
    error.textContent = 'Please Fill All The Fields';
    setTimeout(function () {
      error.classList.remove('show-error');
      error.textContent = '';
      document.querySelector('.send-data').style.height = '400px';
    }, 3000);
  }
});
const signupForm = document.querySelector('.signup form');
signupForm?.addEventListener('submit', function (e) {
  const username = document.getElementById('user-name-signup');
  const mail = document.getElementById('mail-signup');
  const pass = document.getElementById('pass-signup');
  if (username.value === '' || pass.value === '' || mail.value === '') {
    e.preventDefault();
    document.querySelector('.send-data').style.height = '500px';
    const error = document.querySelector('.signup .error');
    error.classList.add('show-error');
    error.textContent = 'Please Fill All The Fields';
    setTimeout(function () {
      error.classList.remove('show-error');
      error.textContent = '';
      document.querySelector('.send-data').style.height = '450px';
    }, 3000);
  }
});
const cashBtn = document.querySelector(
  '.buy .pay .info form .payment-method #cash'
);
cashBtn?.addEventListener('click', function () {
  const cardIn = document.querySelector('.buy .pay .info form .card-number');
  cardIn.classList.add('hide-card');
});
const cardBtn = document.querySelector(
  '.buy .pay .info form .payment-method #card'
);
cardBtn?.addEventListener('click', function () {
  const cardIn = document.querySelector('.buy .pay .info form .card-number');
  cardIn.classList.remove('hide-card');
});

const paymentForm = document.querySelector('.info form');
paymentForm?.addEventListener('submit', function (e) {
  const username = document.getElementById('name-pay');
  const mail = document.getElementById('mail-pay');
  const address = document.getElementById('address-pay');
  const phoneNumber = document.getElementById('number-pay');
  const paymentMethod = document.getElementsByName('method');
  const cardNumber = document.getElementById('card-number');
  if (
    username.value === '' ||
    mail.value === '' ||
    address.value === '' ||
    phoneNumber.value === '' ||
    (paymentMethod[1].checked && cardNumber.value === '')
  ) {
    e.preventDefault();
    const error = document.querySelector('.info .error');
    error.classList.add('show-error');
    error.textContent = 'Please Fill All The Fields';
    setTimeout(function () {
      error.classList.remove('show-error');
      error.textContent = '';
    }, 3000);
  }
});
