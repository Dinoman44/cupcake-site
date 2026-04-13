const PASSWORD = "skyville";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("password-form");
  const navbar = document.getElementById("navbar");
  const main = document.getElementById("main");
  const wrongPasswordMessage = document.getElementById("wrong-password");
  const correctPasswordMessage = document.getElementById("correct-password");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.getElementById("password-input").value.toLowerCase();
    if (input === PASSWORD) {
      wrongPasswordMessage.style.display = "none";
      form.style.display = "none";
      correctPasswordMessage.style.display = "block";
      setTimeout(() => {
        main.style.display = "block";
        navbar.style.display = "block";
      }, 1500);
    } else {
      main.style.display = "none";
      navbar.style.display = "none";
      wrongPasswordMessage.style.display = "block";
    }
  });
});
