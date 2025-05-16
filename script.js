const form = document.getElementById('contact-form');
const responseEl = document.getElementById('response');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const scriptURL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL"; // Replace with your actual URL

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      responseEl.textContent = "Message sent successfully!";
      responseEl.className = "message success";
      responseEl.style.display = "block";
      form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      responseEl.textContent = "Failed to send. Please try again.";
      responseEl.className = "message error";
      responseEl.style.display = "block";
    });
});

// Autofill 'name' field from URL if ?name=... is present
const urlParams = new URLSearchParams(window.location.search);
const nameParam = urlParams.get('name');

if (nameParam) {
  const nameInput = document.getElementById('name');
  if (nameInput) {
    nameInput.value = decodeURIComponent(nameParam);
  }
}