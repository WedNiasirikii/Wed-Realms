function copySeed(seedId) {
  var seedText = document.getElementById(seedId).textContent;
  navigator.clipboard.writeText(seedText).then(() => {
    alert("Seed copiada: " + seedText);
  });
}
