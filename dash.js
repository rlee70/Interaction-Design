document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const storedData = localStorage.getItem("registeredUser");

  // If not logged in go   back to login page
  if (isLoggedIn !== "true" || !storedData) {
    window.location.href = "login.html";
    return;
  }

  const user = JSON.parse(storedData);
  const displayName = document.getElementById("user-name");
  if (displayName) {
    displayName.textContent = `${user.name} `;
  }
  const displayEmail = document.getElementById("user-email");
  if (displayEmail) {
    displayEmail.textContent = `${user.email} `;
  }


  //logoutFunctiondf

  document.getElementById("logout-btn").addEventListener("click", () => {

    //deleete session data to simulate logout
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully");
    window.location.href = "/index.html";
  });
});
