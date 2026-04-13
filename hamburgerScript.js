const headerHamburger = document.getElementById("header-hamburger");

// Toggle the mobile nav menu
headerHamburger.addEventListener("click", () => {
  const nav = document.querySelector(".nav-main");
  nav.classList.toggle("active");
  const hamburger = headerHamburger.querySelector(".hamburger");
  hamburger.classList.toggle("active");
});

const overlay = document.getElementById("overlay");
const overlayButtons = document.querySelectorAll("[data-overlay-toggle]");

function setOverlayVisible(visible) {
  overlay.style.display = visible ? "flex" : "none";
  const closeHamburger = document.querySelector(
      "#overlay .close .hamburger",
  );
  if (closeHamburger) {
    closeHamburger.classList.toggle("active", visible);
    
  }
  const mainHamburgerIcon = headerHamburger.querySelector(".hamburger");
  if (mainHamburgerIcon) {
    mainHamburgerIcon.classList.toggle("active", visible);
  }
}

overlayButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isOpen = overlay.style.display !== "none";
    setOverlayVisible(!isOpen);
  });
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    setOverlayVisible(false);
  }
});

// FAKE DATA (NO BACKEND)
const items = [
  { name: "Politics", url: "/archives/aPolitics.html" },
  { name: "Business", url: "/archives/aBusiness.html" },
  { name: "Entertainment", url: "/archives/aEntertainment.html" },
  { name: "Technology", url: "/subcategory/sBusiness.html" },
  { name: "US Government", url: "/subcategory/sPolitics.html" },
  { name: "International Politics", url: "/subcategory/sPolitics.html" },
  { name: "Music", url: "/subcategory/sEntertainment.html" },
  { name: "Jump", url: "index.html" },
];

const searchInput = document.getElementById("search");
const results = document.getElementById("results");
const loader = document.getElementById("loader");

let searchTimeout;

searchInput.addEventListener("input", () => {
  results.innerHTML = "";
  loader.classList.remove("hidden");

  // Clear previous timeout
  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    loader.classList.add("hidden");
    const query = searchInput.value.toLowerCase();
    const matches = items.filter((item) =>
      item.name.toLowerCase().includes(query),
    );
    //ifnothing matches
    if (matches.length === 0 && query !== "") {
      const li = document.createElement("li");
      li.textContent = "No results found";
      results.appendChild(li);
    }

    matches.forEach((match) => {
      const a = document.createElement("a");
      a.textContent = match.name;
      a.href = match.url;
      a.style.textDecoration = "none";
      a.style.color = "white";
      results.appendChild(a);
    });
  }, 300); 
});
