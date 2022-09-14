const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    alert('Все поля должны бить заполнены');
  };
  const input = {Email: email.value, Passwodr: password.value}
  console.log(input);
  form.reset()
});