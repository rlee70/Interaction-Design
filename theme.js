// Grab the toggle button and the body element
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 1. CHECK MEMORY ON PAGE LOAD
// When any page loads, check if the user previously saved a 'dark' preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
}

// 2. LISTEN FOR CLICKS
// If the button exists on the page, listen for a click
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    // Toggle the dark mode class on and off
    body.classList.toggle('dark-mode');

    // 3. SAVE TO MEMORY
    // Check if the body now has the dark mode class, and save that choice
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}