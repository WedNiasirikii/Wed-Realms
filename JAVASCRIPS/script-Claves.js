document.getElementById("searchButton").addEventListener("click", function () {
  const keyword = document.getElementById("keywordInput").value.toLowerCase();
  const modalBody = document.getElementById("modalBodyContent");
  let content = "";
  const element = document.querySelector(".hero");
  let backgroundImage = "";

  if (keyword == "jh") {
    content =
      '<iframe width="100%" height="315" src="https://www.youtube.com/embed/Ztg4AKCtB6k?si=EdzwYDGrdiYNj9UW&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

    const modal = new bootstrap.Modal(document.getElementById("contentModal"));
    modal.show();
  } else if (keyword == "vaciar chat") {
    window.location.href = "https://youtu.be/0GG46mqDoQI?si=V4VghNfMQu88OsRk";
  } else if (keyword == "jenny mod") {
    backgroundImage =
      "../IMAGENES/easterEgg/3ac5e2b7d55e528658c4ae6dd3e611ac.jpg";
  } else if (keyword == "wed y wafle") {
    backgroundImage = "../IMAGENES/easterEgg/WedYWafle.jpg";

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Easter Egg Activado.",
      color: "black",
    });
  } else if (keyword == "temporada") {
    Swal.fire({
      text: "3432990858183259732",
      icon: "question",
    });
  } else if (keyword == "allan") {
    content =
      '<iframe width="100%" height="315" src="https://www.youtube.com/embed/dNZtVdj3Q_Q?si=SEsNET8gXHa4outt&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

    const modal = new bootstrap.Modal(document.getElementById("contentModal"));
    modal.show();
  } else if (keyword == "vairon") {
    content =
      '<iframe width="100%" height="315" src="https://www.youtube.com/embed/YabLVBUFLr8?si=U2Qmu-S3jD7-dDVD&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

    const modal = new bootstrap.Modal(document.getElementById("contentModal"));
    modal.show();
  } else if (keyword == "new page") {
    window.location.href = "https://a9fm.github.io/lightshot";
  } else if (keyword == "forager") {
    const ClickSound = new Audio("./IMAGENES/easterEgg/audioForager.mp3");
    ClickSound.play();

    backgroundImage = "../IMAGENES/easterEgg/Forager.jpg";

    document.documentElement.style.setProperty(
      "--fondo-fuerte",
      "url(../IMAGENES/easterEgg/Forager-capa-1jpg.jpg)"
    );

    document.documentElement.style.setProperty(
      "--fondo-simple",
      "url(../IMAGENES/easterEgg/Forager-capa-2.jpg)"
    );

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Easter Egg Activado.",
      color: "black",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ninguna Palabra clave coincide",
    });
  }

  modalBody.innerHTML = content;

  if (backgroundImage) {
    element.style.backgroundImage = `url({backgroundImage})`;
  }
});
