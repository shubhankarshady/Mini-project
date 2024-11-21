const scriptURL = 'https://script.google.com/macros/s/AKfycbz7rdQxU_xiwpLP3TlM6ip4w7Dtth7KvXomMF5Ekn7sCzZU1BVpLKtgKME1YYSGgX25Fg/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => response.json()) // Parse JSON response
    .then((data) => {
       console.log(data); 
      if (data.result === 'success') {
        alert('Thank you! Your form is submitted successfully.');
        console.log("Redirecting to: " + data.redirectPage);
        window.location.href = data.redirectPage; // Redirect to the page specified in the response
      } else {
        alert('Submission failed: ' + data.error);
      }
    })
    .catch((error) => console.error('Error!', error.message));
});
