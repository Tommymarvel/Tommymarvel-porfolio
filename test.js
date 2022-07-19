const hamburger = document.getElementById("hamburger");

const closeMenu = document.getElementById("closemenu");

const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  })

);
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});