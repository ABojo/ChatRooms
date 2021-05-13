(function () {
  const passwordInput = document.querySelector('[name=password]');
  const confirmPasswordInput = document.querySelector('[name=passwordConfirm]');
  confirmPasswordInput.addEventListener('input', function () {
    if (this.value === passwordInput.value) {
      this.setCustomValidity('');
    } else {
      this.setCustomValidity('Passwords do not match!');
    }
  });
})();
