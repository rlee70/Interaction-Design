//run when page loads
document.addEventListener("DOMContentLoaded", () => {
  const storedData = localStorage.getItem("registeredUser");

  if (storedData) {
    const registeredUser = JSON.parse(storedData);
    
    //diisplay the info
    const displayName = document.getElementById("user-name");
    if (displayName) {
      displayName.textContent = `${registeredUser.name} `;

    }
    const displayEmail = document.getElementById("user-email");
    if (displayEmail) {
      displayEmail.textContent = `${registeredUser.email} `;

    }
  }
});