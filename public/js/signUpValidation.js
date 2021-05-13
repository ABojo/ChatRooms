(function () {
  const confirmPasswordInput = document.querySelector('[name=passwordConfirm]');
  confirmPasswordInput.addEventListener('input', function () {
    if (this.value === document.querySelector('[name=password]').value) {
      this.setCustomValidity('');
    } else {
      this.setCustomValidity('Passwords do not match!');
    }
  });
})();
