const texto = "Tengo algo especial preparado para ti duraznito...";
let i = 0;

let musicaIniciada = false;
const audio = document.getElementById("bg-music");

function escribirTexto() {
  if (i < texto.length) {
      document.getElementById("typing-text").innerHTML += texto.charAt(i);
          i++;
              setTimeout(escribirTexto, 80);
                }
                }

                window.onload = () => {
                  escribirTexto();
                    setInterval(crearCorazon, 800);
                    };

                    function iniciarMusica() {
                      if (!musicaIniciada) {
                          audio.volume = 0;
                              audio.play();
                                  musicaIniciada = true;

                                      let vol = 0;
                                          const fade = setInterval(() => {
                                                if (vol < 0.5) {
                                                        vol += 0.02;
                                                                audio.volume = vol;
                                                                      } else {
                                                                              clearInterval(fade);
                                                                                    }
                                                                                        }, 200);
                                                                                          }
                                                                                          }

                                                                                          function toggleMusic() {
                                                                                            if (audio.paused) {
                                                                                                audio.play();
                                                                                                  } else {
                                                                                                      audio.pause();
                                                                                                        }
                                                                                                        }

                                                                                                        function mostrarGaleria() {
                                                                                                          const intro = document.getElementById("intro");
                                                                                                            const galeria = document.getElementById("galeria");

                                                                                                              intro.style.opacity = 0;

                                                                                                                setTimeout(() => {
                                                                                                                    intro.style.display = "none";
                                                                                                                        galeria.style.opacity = 1;
                                                                                                                            galeria.style.pointerEvents = "auto";
                                                                                                                              }, 1200);
                                                                                                                              }

                                                                                                                              function mostrarTexto() {
                                                                                                                                const galeria = document.getElementById("galeria");
                                                                                                                                  const texto = document.getElementById("texto");

                                                                                                                                    galeria.style.opacity = 0;

                                                                                                                                      setTimeout(() => {
                                                                                                                                          galeria.style.display = "none";
                                                                                                                                              texto.style.opacity = 1;
                                                                                                                                                  texto.style.pointerEvents = "auto";
                                                                                                                                                    }, 1200);
                                                                                                                                                    }

                                                                                                                                                    function crearCorazon() {
                                                                                                                                                      const heart = document.createElement("div");
                                                                                                                                                        heart.classList.add("heart");

                                                                                                                                                          heart.style.left = Math.random() * 100 + "vw";
                                                                                                                                                            heart.style.animationDuration = (6 + Math.random() * 5) + "s";
                                                                                                                                                              heart.style.opacity = Math.random();

                                                                                                                                                                document.getElementById("hearts-container").appendChild(heart);

                                                                                                                                                                  setTimeout(() => {
                                                                                                                                                                      heart.remove();
                                                                                                                                                                        }, 9000);
                                                                                                                                                                        }

                                                                                                                                                                        /* Parallax fake suave */
                                                                                                                                                                        document.addEventListener("mousemove", (e) => {
                                                                                                                                                                          const decor = document.querySelector(".decor-layer");
                                                                                                                                                                            const x = (e.clientX / window.innerWidth - 0.5) * 20;
                                                                                                                                                                              const y = (e.clientY / window.innerHeight - 0.5) * 20;
                                                                                                                                                                                decor.style.transform = `translate(${x}px, ${y}px)`;
                                                                                                                                                                                });