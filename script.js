function sendMail() {
  const parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_rqa9c3n", "template_d46nlpj", parms)
    .then(function(response) {
      alert("✅ Email sent successfully!");
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("❌ Failed to send email: " + error.text);
    });
}
