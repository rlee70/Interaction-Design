//run when page loads
document.addEventListener("DOMContentLoaded", () => {
  const storedData = localStorage.getItem("registeredUser");

  if (storedData) {
    const registeredUser = JSON.parse(storedData);
    
    //diisplay the info
    const displayElement = document.getElementById("user-data");
    if (displayElement) {
      displayElement.textContent = `${registeredUser.name} - ${registeredUser.email}`;
    }
  }
});