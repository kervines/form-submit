const validated = () => {
  const email = document.querySelector('#inputEmail');
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!emailPattern.test(email.value)) {
          email.classList.add('is-invalid');
          event.preventDefault();
          event.stopPropagation();
        } else {
          email.classList.remove('is-invalid');
        }

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },
      false
    );
  });
};

validated();
