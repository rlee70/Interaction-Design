const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// when pg loads check if user already toggled dark mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
}

// if  button exists on the page, listen for a click
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    // Toggle the dark mode class on and off
    body.classList.toggle('dark-mode');

    // Check if the body now has the dark mode class and save choice for future clicks/navigation
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}