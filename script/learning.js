// Get all module links and content sections
const moduleLinks = document.querySelectorAll(".module-link");
const contentSections = document.querySelectorAll(".toggle-content");

// Add event listeners to each module link
moduleLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    moduleLinks.forEach((item) => item.classList.remove("sidebar-active"));

    link.classList.add("sidebar-active");

    contentSections.forEach((section) => (section.style.display = "none"));

    const targetId = link.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = "block";
    }
  });
});
