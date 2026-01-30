const intro = document.getElementById("intro");
const galeria = document.getElementById("galeria");
const texto = document.getElementById("texto");
const carta = document.querySelector(".love-letter");
const music = document.getElementById("bg-music");

let musicPlaying = false;

/* ===== TEXTO ESCRIBIÉNDOSE ===== */
const textoIntro = "Hice este pequeño rincón solo para ti...";
let index = 0;
const typingText = document.getElementById("typing-text");

function escribirTexto() {
  if (index < textoIntro.length) {
    typingText.textContent += textoIntro.charAt(index);
    index++;
    setTimeout(escribirTexto, 60);
  }
}
escribirTexto();

/* ===== MÚSICA ===== */
function iniciarMusica() {
  if (!musicPlaying) {
    music.play();
    musicPlaying = true;
  }
}

function toggleMusic() {
  if (musicPlaying) {
    music.pause();
  } else {
    music.play();
  }
  musicPlaying = !musicPlaying;
}

/* ===== NAVEGACIÓN ===== */
function mostrarGaleria() {
  intro.style.display = "none";
  galeria.style.display = "flex";
}

function mostrarTexto() {
  galeria.style.display = "none";
  texto.style.display = "flex";

  // MOSTRAR CARTA SOLO AQUÍ
  carta.style.display = "block";
}

/* ===== CORAZONES ===== */
function crearCorazon() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 4 + "s";
  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(crearCorazon, 600);