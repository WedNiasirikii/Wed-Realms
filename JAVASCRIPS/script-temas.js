const element = document.querySelector(".hero");
let backgroundImage = "";

//cambio a tema Bamboo

function temaLadrillos() {
  const ClickSound = new Audio("./SONIDOS/29960.mp3");
  ClickSound.play();
  const element = document.querySelector(".hero");
  let backgroundImage = "";
  document.documentElement.style.setProperty(
    "--fondo-fuerte",
    "url(../IMAGENES/temas/ladrillos/Stone_Bricks_29_JE3_BE2.webp)"
  );

  document.documentElement.style.setProperty(
    "--fondo-simple",
    "url(../IMAGENES/temas/ladrillos/Spruce_Planks_29_JE4_BE2.webp)"
  );

  document.documentElement.style.setProperty("--color-texto-simple", "white");

  document.documentElement.style.setProperty("--color-texto-fuerte", "orange");

  element.style.backgroundImage =
    "url(../IMAGENES/temas/ladrillos/Portada.jpg)";
}
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

  element.style.backgroundImage =
    "url(../IMAGENES/temas/bamboo/Portada-bamboo.jpg)";
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

  element.style.backgroundImage = `url(../IMAGENES/temas/roca-negra/Portada-Nethher.jpg)`;
}

//cambio a tema End
function temaEnd() {
  const ClickSound = new Audio("./SONIDOS/29960.mp3");
  ClickSound.play();

  document.documentElement.style.setProperty(
    "--fondo-fuerte",
    "url(../IMAGENES/temas/end/End_Stone_Bricks_29_JE2_BE2.webp)"
  );
  document.documentElement.style.setProperty(
    "--fondo-simple",
    "url(../IMAGENES/temas/end/Purpur_Block_29_JE2_BE2.webp)"
  );
  document.documentElement.style.setProperty("--color-texto-simple", "black");

  document.documentElement.style.setProperty("--color-texto-fuerte", "purple");

  document.documentElement.style.setProperty(
    "--fondo-alerta",
    "url(../IMAGENES/temas/end/Crying_Obsidian_29_JE1_BE1.webp)"
  );

  element.style.backgroundImage = "url(../IMAGENES/temas/end/portada-end.jpg)";
}
