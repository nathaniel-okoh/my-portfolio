const navLinks = document.querySelectorAll("header nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    navLinks.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");
  });
});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
