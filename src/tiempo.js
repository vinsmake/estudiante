document.addEventListener("DOMContentLoaded", function () {
    const rango = document.getElementById("customRange3");
    const valorGuardado = localStorage.getItem("horaSimulacion");

    if (valorGuardado) {
        rango.value = valorGuardado;
        window.actualizarValor(valorGuardado);
    }
});

window.actualizarValor = function () {
    const horaSimulacion = document.getElementById("customRange3").value;
    document.getElementById('valor-tiempo').textContent = `Tiempo seleccionado: ${horaSimulacion} h`;
}

window.generarSimulacion = function () {
    const tiempo = document.getElementById('customRange3').value;
    localStorage.setItem("horaSimulacion", tiempo);
    window.location.href = "interface.html";
}

window.regresarIndex = function () {
    localStorage.setItem("horaSimulacion", 1);
    window.location.href = "index.html";
}
