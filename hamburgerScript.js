const headerHamburger = document.getElementById("header-hamburger");

// Toggle the mobile nav menu
headerHamburger.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
  headerHamburger.classList.toggle("active");
});

const overlay = document.getElementById("overlay");
const overlayButtons = document.querySelectorAll("[data-overlay-toggle]");

function setOverlayVisible(visible) {
  overlay.style.display = visible ? "block" : "none";
  const closeHamburger = document.querySelector("#overlay .close-button .hamburger");
  if (closeHamburger) {
    closeHamburger.classList.toggle("active", visible);
  }
}

overlayButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isOpen = overlay.style.display === "block";
    setOverlayVisible(!isOpen);
  });
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    setOverlayVisible(false);
  }
});

// FAKE DATA (NO BACKEND)
const items = ["Home", "Explore", "About", "Contact"];

const searchInput = document.getElementById("search");
const results = document.getElementById("results");
const loader = document.getElementById("loader");

searchInput.addEventListener("input", () => {
  results.innerHTML = "";
  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");
    const query = searchInput.value.toLowerCase();
    const matches = items.filter((item) => item.toLowerCase().includes(query));

    if (matches.length === 0 && query !== "") {
      const li = document.createElement("li");
      li.textContent = "No results found";
      results.appendChild(li);
    }

    matches.forEach((match) => {
      const li = document.createElement("li");
      li.textContent = match;
      results.appendChild(li);
    });
  }, 1200);
});
