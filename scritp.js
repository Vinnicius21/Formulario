const form = document.getElementsByClassName("form-group")[0];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Enviado");
  form.reset();
});
