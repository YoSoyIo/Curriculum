const boton = document.getElementById("imprimir");
const desc = document.getElementById("desc-btn");

boton.addEventListener("mouseover", function () {
  desc.style.display = "block"; 
});

boton.addEventListener('mouseout', function() {
    desc.style.display = "none";
  });