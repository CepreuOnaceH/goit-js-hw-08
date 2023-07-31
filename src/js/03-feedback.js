import throttle from 'lodash.throttle';

const saveFormState = () => {
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  const formData = { email, message };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadFormState = () => {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    document.querySelector('input[name="email"]').value = formData.email || '';
    document.querySelector('textarea[name="message"]').value = formData.message || '';
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  console.log({ email, message });
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
  localStorage.removeItem('feedback-form-state');
};

window.addEventListener('load', loadFormState);
document.querySelector('input[name="email"]').addEventListener('input', throttle(saveFormState, 500));
document.querySelector('textarea[name="message"]').addEventListener('input', throttle(saveFormState, 500));
document.querySelector('.feedback-form').addEventListener('submit', handleSubmit);
