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
                    setInterval(crearCorazon, 600);
                    };

                    function mostrarSorpresa() {
                      document.getElementById("card").style.display = "none";
                        document.getElementById("sorpresa").style.display = "block";
                        }

                        function crearCorazon() {
                          const heart = document.createElement("div");
                            heart.classList.add("heart");

                              heart.style.left = Math.random() * 100 + "vw";
                                heart.style.animationDuration = (4 + Math.random() * 4) + "s";
                                  heart.style.opacity = Math.random();

                                    document.getElementById("hearts-container").appendChild(heart);

                                      setTimeout(() => {
                                          heart.remove();
                                            }, 7000);
                                            }