document.addEventListener("DOMContentLoaded", function () {
    const rango = document.getElementById("customRange3");
    const valorGuardado = localStorage.getItem("horaSimulacion");

    // Si hay un valor guardado, actualizar el input range
    if (valorGuardado) {
        rango.value = valorGuardado;
        actualizarValor(valorGuardado); // También actualiza el texto mostrado
    }
});

// Función para actualizar el valor del rango en tiempo real
function actualizarValor() {
    horaSimulacion = document.getElementById("customRange3").value;
    document.getElementById('valor-tiempo').textContent = `Tiempo seleccionado: ${horaSimulacion} h`;
}


// Función para manejar el clic en el botón
function generarSimulacion() {
    const tiempo = document.getElementById('customRange3').value;
    localStorage.setItem("horaSimulacion", tiempo);
    window.location.href = "interface.html"; // Redirige a la página interface.html
}

function regresarIndex(){
    localStorage.setItem("horaSimulacion", 1);
    window.location.href = "index.html";
}