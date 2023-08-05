let boton = document.getElementById("boton-saludador");
boton.addEventListener("click", function () {
  event.stopPropagation();
  alert("Hola!");
});

let container = document.getElementById("button-container");
container.addEventListener("click", function () {
  alert("Hola, soy el div!");
});
