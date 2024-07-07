function copySeed(seedId) {
  var seedText = document.getElementById(seedId).textContent;
  navigator.clipboard.writeText(seedText).then(() => {
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
      title: "Seed copiada.",
      background: "var(--fondo-alerta)",
      color: "white",
    });
  });
}
