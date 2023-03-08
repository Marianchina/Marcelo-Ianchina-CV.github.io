function MostrarParrafoPC(id, botonpc) {
  var extrapc = document.getElementById("extrapc");
  if (extrapc.style.display === "none") {
    extrapc.style.display = "block";
    botonpc.textContent = "Mostrar menos";
  }
   else {
    extrapc.style.display = "none";
    botonpc.textContent = "Mostrar mas"
  }
}
function MostrarParrafoCJ(id, botoncj) {
  var extracj = document.getElementById("extracj");
  if (extracj.style.display === "none") {
    extracj.style.display = "block";
    botoncj.textContent = "Mostrar menos"
  } 
    else {
    extracj.style.display = "none";
    botoncj.textContent = "Mostrar más"
  }
}
function MostrarParrafoAP(id, botonap) {
  var extraap = document.getElementById("extraap");
  if (extraap.style.display === "none") {
    extraap.style.display = "block";
    botonap.textContent = "Mostrar menos"
  } 
    else {
    extraap.style.display = "none";
    botonap.textContent = "Mostrar más"
  }
}