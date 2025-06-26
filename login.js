// login.js
const loginToggle = document.getElementById('loginToggle');
const signupToggle = document.getElementById('signupToggle');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginToggle.addEventListener('click', () => {
  loginToggle.classList.add('active');
  signupToggle.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});

signupToggle.addEventListener('click', () => {
  signupToggle.classList.add('active');
  loginToggle.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});

function showWarning(input, message) {
  const group = input.closest('.input-group');

  const existing = group.querySelector('.warning');
  if (existing) return;

  const warning = document.createElement('div');
  warning.className = 'warning';
  warning.innerText = message;
  group.appendChild(warning);

  setTimeout(() => {
    if (warning.parentElement) {
      warning.remove();
    }
  }, 3000);
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  let valid = true;

  form.querySelectorAll('input').forEach(input => {
    if (!input.value.trim()) {
      valid = false;
      showWarning(input, 'This field is required');
    }
  });

  return valid;
}

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  if (validateForm('loginForm')) {
    alert('Login success (placeholder)');
  }
});

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  if (validateForm('signupForm')) {
    alert('Sign up success (placeholder)');
  }
});

function togglePassword(icon) {
  const input = icon.previousElementSibling;
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  icon.textContent = isHidden ? 'Hide' : 'Show';
}
