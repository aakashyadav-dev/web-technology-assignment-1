// User-defined function: displays a safe confirmation message after submission.
function submitAdmissionForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const result = document.getElementById('admissionResult');
  const safeName = name.replace(/[&<>]/g, '');

  result.hidden = false;
  result.innerHTML = `<span class="success">Admission form submitted successfully for ${safeName}.</span>`;
}

document
  .getElementById('admissionForm')
  .addEventListener('submit', submitAdmissionForm);
