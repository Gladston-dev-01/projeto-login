const form = document.querySelector("form");
const email = document.getElementById("iemail");
const senha = document.getElementById("isenha");

form.addEventListener("submit", function (event) {
  if (email.value.trim() !== "" && senha.value.trim() === "") {
    event.preventDefault();
    senha.setCustomValidity("Preencha a senha");
    senha.reportValidity();
  } else {
    senha.setCustomValidity("");
  }
});
