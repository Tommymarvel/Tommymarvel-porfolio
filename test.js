const hamburger = document.querySelector(".hamburger");
const navTags = document.querySelector(".nav-tags");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navTags.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navTags.classList.remove("active");
  })
);
