const PASSWORD = "cupcake";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("password-form");
  const navbar = document.getElementById("navbar");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.getElementById("password-input").value;
    if (input === PASSWORD) {
      navbar.style.display = "block";
    } else {
      alert("Incorrect password.");
    }
  });
});
