(function () {
  const checkbox = document.getElementById('private');
  const passwordInput = document.querySelector('[name=password]');
  checkbox.addEventListener('click', () => {
    if (passwordInput.disabled) {
      passwordInput.disabled = false;
      passwordInput.required = true;
    } else {
      passwordInput.disabled = true;
      passwordInput.required = false;
      passwordInput.value = '';
    }
  });
})();
