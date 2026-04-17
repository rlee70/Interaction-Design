
// Week 12 - Now OUTSIDE the search listener
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pwd");

/* ---------- NAME ---------- */
nameInput.addEventListener("input", () => {
  const value = nameInput.value.trim();

  if (value.length < 2) {
    showError(nameInput, "Name must be at least 2 characters");
  } else {
    showSuccess(nameInput);
  }
});

/* ---------- EMAIL ---------- */
emailInput.addEventListener("input", () => {
  const value = emailInput.value.trim();


  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!emailPattern.test(value)) {
    showError(emailInput, "Invalid email format");
  } else {
    showSuccess(emailInput);
  }
});

/* ---------- PASSWORD ---------- */
passwordInput.addEventListener("input", () => {
  const value = passwordInput.value.trim();

  if (value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
  } else {
    showSuccess(passwordInput);
  }
});
/* ---------- SUBMIT ---------- */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userData = {
  name: nameInput.value,
  email: emailInput.value,
  password: passwordInput.value,
};
  e.preventDefault();
  if (
    nameInput.classList.contains("invalid") ||
    emailInput.classList.contains("invalid") || 
    passwordInput.classList.contains("invalid")
  ) {
    alert("Fix errors before submitting");
  } else {
    // alert("Form submitted");
    localStorage.setItem("registeredUser", JSON.stringify(userData));
      localStorage.setItem("isLoggedIn", "true");

    // window.location.replace = "loggin.html";
    alert("Registration successful!");
      window.location.href = "profile.html";

      
    // let registeredUser = localStorage.getItem("registeredUser");
    // registeredUser = JSON.parse(registeredUser);

    // document.getElementById("user-data").textContent = registeredUser.name + " - " + registeredUser.email;

  }
});

/* ---------- HELPERS ---------- */
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

// ← REMOVED the extra }); from here