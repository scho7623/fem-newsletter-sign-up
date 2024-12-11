const formBtn = document.querySelector('.form button');
const dismissBtn = document.querySelector('.success button');
const emailInput = document.querySelector('#email');
const errorMsg = document.querySelector('.err-msg');
const signUp = document.querySelector('.sign-up');
const success = document.querySelector('.success');

formBtn.addEventListener('click', (e) => {
  const email = emailInput.value;
  const regex = new RegExp('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}');

  if (email && regex.test(email)) {
    errorMsg.classList.add('hidden');
    emailInput.classList.remove('invalid');
    signUp.classList.add('hidden');
    success.classList.remove('hidden');
  } else {
    errorMsg.classList.remove('hidden');
    emailInput.classList.add('invalid');
  }
  e.preventDefault();
});

dismissBtn.addEventListener('click', () => {
    signUp.classList.remove('hidden');
    success.classList.add('hidden');
});
