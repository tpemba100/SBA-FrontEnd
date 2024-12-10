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

//Load the language data
function loadLanguage() {
  fetch("../ts.json")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector(".rwd-table tbody");

      for (let i = 0; i < 10; i++) {
        const row = document.createElement("tr");

        const langCell = document.createElement("td");
        langCell.classList.add("lang-row");
        langCell.textContent = data[i].letter;

        const pronunciationCell = document.createElement("td");
        pronunciationCell.textContent = data[i].pronunciation;

        row.appendChild(langCell);
        row.appendChild(pronunciationCell);
        tableBody.appendChild(row);
      }
    });
}
