function checkvalidation(sentencef) {
  const lowercase = sentencef.toLowerCase();
  if (lowercase === sentencef) return false;
  return true;
}

function validateEmail(email, input) {
  const msg = input.parentNode.querySelector('small');
  if (checkvalidation(email)) {
    msg.innerText = 'The email should be in lower case';
    input.className = 'error';
    return false;
  }
  return true;
}

const form = document.querySelector('#contactme');
form.addEventListener('submit', (event) => {
  const email = form.elements.email.value;
  if (!validateEmail(email, form.elements.email)) {
    event.preventDefault();
  }
});
