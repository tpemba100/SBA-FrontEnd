// Get the form and input elements
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formDataDisplay = document.getElementById("formDataDisplay");
const formDataPre = document.getElementById("formData");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Add an event listener for the form submission
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from actually submitting

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!passwordPattern.test(password)) {
    alert(
      "Password must be at least 8 characters long and contain at least one letter and one number."
    );
    return;
  }

  // Main function
  console.log("Email:", email);
  console.log("Password:", password);

  // Redirect to the learning page
  setTimeout(function () {
    window.location.href = "learning.html";
  }, 2000);
});
