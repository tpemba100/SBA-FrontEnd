// Get the form and input elements
const registerForm = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const formDataDisplay = document.getElementById("formDataDisplay");
const formDataPre = document.getElementById("formData");

// Add an event listener for the form submission
registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from actually submitting

  // Get the values from the form inputs
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // Log the form data to the console
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);

  // Display the form data below the form in a formatted way
  const formData = {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  formDataPre.textContent = JSON.stringify(formData, null, 2);
  formDataDisplay.style.display = "block"; // Show the form data section
});
