//cambio a tema Bamboo
function temaBamboo() {
  const ClickSound = new Audio("./SONIDOS/29960.mp3");
  ClickSound.play();

  document.documentElement.style.setProperty(
    "--fondo-fuerte",
    "url(../IMAGENES/temas/bamboo/Block_of_Stripped_Bamboo_29_JE1_BE1.webp)"
  );

  document.documentElement.style.setProperty(
    "--fondo-simple",
    "url(../IMAGENES/temas/bamboo/Block_of_Bamboo_29_JE1.webp)"
  );

  document.documentElement.style.setProperty("--color-texto-simple", "white");

  document.documentElement.style.setProperty("--color-texto-fuerte", "yellow");

  document.documentElement.style.setProperty(
    "--fondo-alerta",
    "url(../IMAGENES/temas/bamboo/Lime_Stained_Glass_29_JE3_BE2.webp)"
  );
}

//cambio a temaRocaNegra
function temaRocaNegra() {
  //Libera un sonido de "click"
  const ClickSound = new Audio("./SONIDOS/29960.mp3");
  ClickSound.play();

  document.documentElement.style.setProperty(
    "--fondo-fuerte",
    "url(../IMAGENES/temas/roca-negra/fondo-piedra-negra-body.jpg.jpg)"
  );

  document.documentElement.style.setProperty(
    "--fondo-simple",
    "url(../IMAGENES/temas/roca-negra/Smooth_Basalt_29_JE1.webp)"
  );

  document.documentElement.style.setProperty("--color-texto-simple", "white");

  document.documentElement.style.setProperty("--color-texto-fuerte", "orange");

  document.documentElement.style.setProperty(
    "--fondo-alerta",
    "url(../IMAGENES/temas/roca-negra/Gilded_Blackstone_29_JE2.webp)"
  );
}

//cambio a tema End
function temaEnd() {
  const ClickSound = new Audio("./SONIDOS/29960.mp3");
  ClickSound.play();

  document.getElementById("contenedorBody").style.backgroundImage =
    "url(./IMAGENES/temas/end/End_Stone_Bricks_29_JE2_BE2.webp)";

  document.querySelectorAll("section").forEach((section) => {
    section.style.backgroundImage =
      "url(./IMAGENES/temas/end/Purpur_Block_29_JE2_BE2.webp)";
  });

  document.querySelectorAll(".icons-temas").forEach((End) => {
    End.style.backgroundImage =
      "url(./IMAGENES/temas/end/End_Stone_29_JE3_BE2.webp)";
  });

  document.querySelectorAll(".links-containers").forEach((EndLink) => {
    EndLink.style.backgroundImage =
      "url(./IMAGENES/temas/end/End_Stone_29_JE3_BE2.webp)";
  });

  document.querySelectorAll(".resource").forEach((EndRecurse) => {
    EndRecurse.style.backgroundImage =
      "url(./IMAGENES/temas/end/End_Stone_Bricks_29_JE2_BE2.webp)";
  });

  document.querySelectorAll("footer").forEach((EndFooter) => {
    EndFooter.style.backgroundImage =
      "url(./IMAGENES/temas/end/Purpur_Block_29_JE2_BE2.webp)";
  });

  document.documentElement.style.setProperty("--color-texto-simple", "black");

  document.documentElement.style.setProperty("--color-texto-fuerte", "purple");

  document.documentElement.style.setProperty(
    "--fondo-alerta",
    "url(../IMAGENES/temas/end/Crying_Obsidian_29_JE1_BE1.webp)"
  );
}
