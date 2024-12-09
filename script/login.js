// Get the form and input elements
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formDataDisplay = document.getElementById("formDataDisplay");
const formDataPre = document.getElementById("formData");

// Add an event listener for the form submission
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from actually submitting

  // Get the values from the form inputs
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Log the form data to the console
  console.log("Email:", email);
  console.log("Password:", password);

  // Redirect to the learning page
  setTimeout(function () {
    window.location.href = "learning.html";
  }, 2000);
});
