const hamburger = document.getElementById("hamburger");

// Toggle the 'active' class to show/hide the menu
hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
});
