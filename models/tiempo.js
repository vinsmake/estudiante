// Función para actualizar el valor del rango en tiempo real
function actualizarValor(valor) {
    document.getElementById('valor-tiempo').textContent = valor + " horas";
}

// Función para manejar el clic en el botón
function generarSimulacion() {
    const tiempo = document.getElementById('tiempo').value;
    localStorage.setItem("horaSimulacion", tiempo);
    window.location.href = "interface.html"; // Redirige a la página interface.html
}
