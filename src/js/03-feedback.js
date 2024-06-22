import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

const saveFormState = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

const loadFormState = () => {
  const savedState = localStorage.getItem(STORAGE_KEY);
  if (savedState) {
    const formData = JSON.parse(savedState);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log('Form submitted:', formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
};

loadFormState();

form.addEventListener('input', saveFormState);
form.addEventListener('submit', handleSubmit);

