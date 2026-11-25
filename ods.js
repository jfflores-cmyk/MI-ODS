// interaccion del boton de reporte
const btnAccion = document.getElementById("btn-accion");
const msg = document.getElementById("msg");

btnAccion.addEventListener("click", function() {
    msg.textContent = "✅ ¡Reporte enviado con éxito! Gracias por colaborar.";
    btnAccion.textContent = "Enviado";
    btnAccion.style.backgroundColor = "#2a9d8f";
});