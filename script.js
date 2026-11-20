const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  errorEmail.textContent = '';
  errorPassword.textContent = '';
  emailInput.classList.remove('input-error');
  passwordInput.classList.remove('input-error');

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  let isFormValid = true;

  if (emailValue === '') {
    errorEmail.textContent = 'Email tidak boleh kosong.';
    emailInput.classList.add('input-error');
    isFormValid = false;
  } else if (!isValidEmail(emailValue)) {
    errorEmail.textContent = 'Format email tidak valid.';
    emailInput.classList.add('input-error');
    isFormValid = false;
  }

  if (passwordValue === '') {
    errorPassword.textContent = 'Password tidak boleh kosong.';
    passwordInput.classList.add('input-error');
    isFormValid = false;
  } else if (passwordValue.length < 6) {
    errorPassword.textContent = 'Password minimal 6 karakter';
    passwordInput.classList.add('input-error');
    isFormValid = false;
  }

  if (isFormValid) {
    const loginData = {
      email: emailValue,
      loginAt: new Date().toISOString()
    };

    localStorage.setItem('loginData', JSON.stringify(loginData));
    console.log('Login berhasil', loginData);
    alert('Login berhasil!');
    loginForm.reset();
  }
});
