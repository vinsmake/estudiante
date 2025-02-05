// Función para actualizar el valor del rango en tiempo real
function actualizarValor(valor) {
    document.getElementById('valor-tiempo').textContent = `Tiempo seleccionado: ${valor} h`;
}


// Función para manejar el clic en el botón
function generarSimulacion() {
    const tiempo = document.getElementById('customRange3').value;
    localStorage.setItem("horaSimulacion", tiempo);
    window.location.href = "interface.html"; // Redirige a la página interface.html
}
