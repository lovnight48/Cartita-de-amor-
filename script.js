const intro = document.getElementById("intro");
const galeria = document.getElementById("galeria");
const texto = document.getElementById("texto");
const carta = document.getElementById("carta");
const music = document.getElementById("bg-music");

function mostrarGaleria() {
  intro.classList.remove("show");
  galeria.classList.add("show");
}

function mostrarTexto() {
  galeria.classList.remove("show");
  texto.classList.add("show");
}

function mostrarCarta() {
  texto.classList.remove("show");
  carta.scrollIntoView({ behavior: "smooth" });
}

function iniciarMusica() {
  music.play();
}

function toggleMusic() {
  music.paused ? music.play() : music.pause();
}