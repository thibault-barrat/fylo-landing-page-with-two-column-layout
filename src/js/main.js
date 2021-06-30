function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

document.querySelectorAll('.signin-form').forEach(item => {
item.addEventListener('submit', (event) => {
  var form = event.target;
  if(!ValidateEmail(form.querySelector('.signin-form__input'))) {
    event.preventDefault();
    form.querySelector('.signin-form__error').style.display = 'block';
    form.querySelector('.signin-form__input').style.borderColor = 'red';
    return false;
  } else {
    form.querySelector('.signin-form__error').style.display = 'none';
    form.querySelector('.signin-form__input').style.borderColor = '#070439';
  }
})
})

