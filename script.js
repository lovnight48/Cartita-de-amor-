const texto = "Tengo algo especial preparado para ti...";
let i = 0;

function escribirTexto() {
  if (i < texto.length) {
    document.getElementById("typing-text").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribirTexto, 80);
  }
}

window.onload = escribirTexto;

function mostrarSorpresa() {
  document.getElementById("card").style.display = "none";
  document.getElementById("sorpresa").style.display = "block";
}