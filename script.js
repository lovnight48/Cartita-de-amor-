const texto = "Tengo algo especial preparado para ti...";
let i = 0;

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