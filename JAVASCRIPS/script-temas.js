//cambio a tema Bamboo
function temaBamboo() {
  const ClickSound = new Audio("./SONIDOS/29960.mp3");
  ClickSound.play();

  // Cambia el fondo del cuerpo
  document.getElementById("contenedorBody").style.backgroundImage =
    "url(./IMAGENES/temas/bamboo/Block_of_Stripped_Bamboo_29_JE1_BE1.webp)";

  // Cambia el fondo de todas las secciones
  document.querySelectorAll("section").forEach((section) => {
    section.style.backgroundImage =
      "url(./IMAGENES/temas/bamboo/Block_of_Bamboo_29_JE1.webp)";
  });

  document.querySelectorAll(".icons-temas").forEach((mosaicos) => {
    mosaicos.style.backgroundImage =
      "url(./IMAGENES/temas/bamboo/Bamboo_Mosaic_29_JE1_BE1.webp)";
  });

  document.querySelectorAll(".links-containers").forEach((mosaicosLink) => {
    mosaicosLink.style.backgroundImage =
      "url(./IMAGENES/temas/bamboo/Bamboo_Mosaic_29_JE1_BE1.webp)";

    mosaicosLink.style.color = "white";
  });

  document.querySelectorAll(".links a").forEach((BambooLinkText) => {
    BambooLinkText.style.color = "white";
  });

  document.querySelectorAll(".resource").forEach((mosaicosRecurse) => {
    mosaicosRecurse.style.backgroundImage =
      "url(./IMAGENES/temas/bamboo/Bamboo_Mosaic_29_JE1_BE1.webp)";
  });

  document.querySelectorAll("footer").forEach((mosaicosFooter) => {
    mosaicosFooter.style.backgroundImage =
      "url(./IMAGENES/temas/bamboo/Block_of_Bamboo_29_JE1.webp)";
  });

  document.querySelectorAll("h2").forEach((BambooH2) => {
    BambooH2.style.color = "yellow";
  });

  document.querySelectorAll(".recurse-title").forEach((BambooRecurseTitle) => {
    BambooRecurseTitle.style.color = "Green";
  });

  document.querySelectorAll(".DownloadButton").forEach((BambooDownload) => {
    BambooDownload.style.backgroundColor = "Green";
  });

  document.querySelectorAll(".seeds button").forEach((BambooCopyBoton) => {
    BambooCopyBoton.style.backgroundImage =
      "url(./IMAGENES/temas/bamboo/Bamboo_Mosaic_29_JE1_BE1.webp)";

    BambooCopyBoton.style.color = "White";
  });

  document
    .querySelectorAll(".DownloadButton")
    .forEach((BambooDownloadBoton) => {
      BambooDownloadBoton.style.backgroundImage =
        "url(./IMAGENES/temas/bamboo/Block_of_Bamboo_29_JE1.webp)";
    });
}

//cambio a temaRocaNegra
function temaRocaNegra() {
  //Libera un sonido de "click"
  const ClickSound = new Audio("./SONIDOS/29960.mp3");
  ClickSound.play();
  // Cambia el fondo del cuerpo
  document.getElementById("contenedorBody").style.backgroundImage =
    "url(./IMAGENES/temas/roca-negra/fondo-piedra-negra-body.jpg.jpg)";

  // Cambia el fondo de todas las secciones
  document.querySelectorAll("section").forEach((section) => {
    section.style.backgroundImage =
      "url(./IMAGENES/temas/roca-negra/Smooth_Basalt_29_JE1.webp)";
  });

  document.querySelectorAll(".icons-temas").forEach((RocaNegra) => {
    RocaNegra.style.backgroundImage =
      "url(./IMAGENES/temas/roca-negra/fondo-piedra-negra-body.jpg.jpg)";
  });

  document.querySelectorAll(".links-containers").forEach((RocaNegraLink) => {
    RocaNegraLink.style.backgroundImage =
      "url(./IMAGENES/temas/roca-negra/fondo-piedra-negra-body.jpg.jpg)";
  });

  document.querySelectorAll(".links a").forEach((RocaNegraLinkText) => {
    RocaNegraLinkText.style.color = "white";
  });

  document.querySelectorAll(".resource").forEach((RocaNegraRecurse) => {
    RocaNegraRecurse.style.backgroundImage =
      "url(./IMAGENES/temas/roca-negra/fondo-piedra-negra-body.jpg.jpg)";
  });

  document.querySelectorAll("footer").forEach((RocaNegraFooter) => {
    RocaNegraFooter.style.backgroundImage =
      "url(./IMAGENES/temas/roca-negra/Smooth_Basalt_29_JE1.webp)";
  });

  document.querySelectorAll("h2").forEach((RocaNegraH2) => {
    RocaNegraH2.style.color = "orange";
  });

  document
    .querySelectorAll(".recurse-title")
    .forEach((RocaNegraRecurseTitle) => {
      RocaNegraRecurseTitle.style.color = "orange";
    });

  document.querySelectorAll(".DownloadButton").forEach((RocaNegraDownload) => {
    RocaNegraDownload.style.backgroundImage =
      "url(./IMAGENES/temas/roca-negra/Smooth_Basalt_29_JE1.webp)";
  });

  document
    .querySelectorAll(".recurce-text-explicacion")
    .forEach((RocaNegraText) => {
      RocaNegraText.style.color = "white";
    });

  document.querySelectorAll(".seeds button").forEach((RocaNegraCopyBoton) => {
    RocaNegraCopyBoton.style.backgroundImage =
      "url(./IMAGENES/temas/roca-negra/fondo-piedra-negra-body.jpg.jpg)";

    RocaNegraCopyBoton.style.color = "white";
  });
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

  document.querySelectorAll(".links a").forEach((EndLinkText) => {
    EndLinkText.style.color = "purple";
  });

  document.querySelectorAll(".resource").forEach((EndRecurse) => {
    EndRecurse.style.backgroundImage =
      "url(./IMAGENES/temas/end/End_Stone_Bricks_29_JE2_BE2.webp)";
  });

  document.querySelectorAll("footer").forEach((EndFooter) => {
    EndFooter.style.backgroundImage =
      "url(./IMAGENES/temas/end/Purpur_Block_29_JE2_BE2.webp)";
  });

  document.querySelectorAll(".recurce-text-explicacion").forEach((EndText) => {
    EndText.style.color = "black";
  });

  document.querySelectorAll(".recurse-title").forEach((EndRecurseTitle) => {
    EndRecurseTitle.style.color = "purple";
  });

  document.querySelectorAll(".DownloadButton").forEach((EndDownloadBoton) => {
    EndDownloadBoton.style.backgroundImage =
      "url(./IMAGENES/temas/end/Purpur_Block_29_JE2_BE2.webp)";
  });

  document.querySelectorAll(".seeds button").forEach((EndCopyBoton) => {
    EndCopyBoton.style.backgroundImage =
      "url(./IMAGENES/temas/end/End_Stone_Bricks_29_JE2_BE2.webp)";

    EndCopyBoton.style.color = "purple";
  });
}
