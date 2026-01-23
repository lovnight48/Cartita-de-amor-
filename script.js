const texto = "Tengo algo especial preparado para ti...";
let i = 0;

const fotos = [
  "img/foto1.jpg",
    "img/foto2.jpg",
      "img/foto3.jpg"
      ];

      let indiceFoto = 0;

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
                            setInterval(cambiarFoto, 5000);
                            };

                            function mostrarSorpresa() {
                              document.getElementById("card").style.display = "none";
                                document.getElementById("sorpresa").style.display = "block";
                                }

                                function cambiarFoto() {
                                  const img = document.getElementById("galeria");
                                    img.style.opacity = 0;

                                      setTimeout(() => {
                                          indiceFoto = (indiceFoto + 1) % fotos.length;
                                              img.src = fotos[indiceFoto];
                                                  img.style.opacity = 1;
                                                    }, 1000);
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