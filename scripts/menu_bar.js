const PASSWORD = "skyville";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("password-form");
  const navbar = document.getElementById("navbar");
  const main = document.getElementById("main");
  const wrongPasswordMessage = document.getElementById("wrong-password");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.getElementById("password-input").value.toLowerCase();
    if (input === PASSWORD) {
      main.style.display = "block";
      navbar.style.display = "block";
      wrongPasswordMessage.style.display = "none";
      form.style.display = "none";
    } else {
      main.style.display = "none";
      navbar.style.display = "none";
      wrongPasswordMessage.style.display = "block";
    }
  });
});
