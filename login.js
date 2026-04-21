//run when page loads
// document.addEventListener("DOMContentLoaded", () => {
//   const storedData = localStorage.getItem("registeredUser");

//   if (storedData) {
//     const registeredUser = JSON.parse(storedData);
    
//     //diisplay the info
//     const displayName = document.getElementById("user-name");
//     if (displayName) {
//       displayName.textContent = `${registeredUser.name} `;

//     }
//     const displayEmail = document.getElementById("user-email");
//     if (displayEmail) {
//       displayEmail.textContent = `${registeredUser.email} `;

//     }
//   }
// });

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("login-email").value;
  const passInput = document.getElementById("login-pass").value;


  const storedData = localStorage.getItem("registeredUser");

  if (storedData) {
    const user = JSON.parse(storedData);

    // check local data(storedData) for matching email and password
    if (emailInput === user.email && passInput === user.password) {
      
//create psudoe session item for dash.js to ceck
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "confirmation.html"; // Redirect to a "logged in" page
    } else {
      alert("Invalid email or password");
    }
  } else {
    alert("No user found. Please register first.");
  }
});
function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;

  input.classList.add("invalid");
  input.classList.remove("valid");
}

function showSuccess(input) {
  const error = input.nextElementSibling;
  error.textContent = "";

  input.classList.add("valid");
  input.classList.remove("invalid");
}