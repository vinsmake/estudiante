// Función para abrir el modal
function ampliarElemento(icono) {
    // Obtén el contenedor de la imagen o video
    const contenedor = icono.closest('section'); 
    let contenidoModal = document.getElementById('modal-contenido');
    
    // Verifica si el contenedor tiene una imagen o video
    if (contenedor.querySelector('img')) {
      const imagen = contenedor.querySelector('img');
      // Crea un elemento de imagen dentro del modal
      contenidoModal.innerHTML = `<img src="${imagen.src}" alt="${imagen.alt}" style="width: 100%; height: auto;">`;
    } else if (contenedor.querySelector('video')) {
      const video = contenedor.querySelector('video');
      // Crea un elemento de video dentro del modal
      contenidoModal.innerHTML = `<video src="${video.src}" controls autoplay style="width: 100%; height: auto;"></video>`;
    }
    
    // Muestra el modal
    document.getElementById('modal').style.display = 'block';
  }
  
  // Función para cerrar el modal
  function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-contenido').innerHTML = ''; // Limpia el contenido del modal
  }
  function descargarContenido() {
    const contenidoModal = document.getElementById('modal-contenido');
    const enlace = document.createElement('a');
  
    // Extrae la URL y el nombre del archivo desde el contenido del modal
    const url = contenidoModal.querySelector('img')?.src || contenidoModal.querySelector('video')?.src;
    const filename = contenidoModal.dataset.filename || 'bacteriaE.coli';
  
    if (url) {
      enlace.href = url;
      enlace.download = filename;
      enlace.click();
    } else {
      alert('No hay contenido descargable en el modal.');
    }
  }
  
 // Función para descargar la imagen o video
function descargarElemento(icono) {
  // Encuentra el contenedor del elemento multimedia
  const contenedor = icono.closest('section'); // Cambiamos a 'section' para mayor precisión

  if (!contenedor) {
    alert('No se encontró el contenedor del elemento multimedia.');
    return;
  }

  // Verifica si hay una imagen en el contenedor
  if (contenedor.querySelector('img')) {
    const imagen = contenedor.querySelector('img');
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = imagen.src;
    enlaceDescarga.download = 'imagen.png'; // Nombre del archivo para descargar
    enlaceDescarga.click();
  } 
  // Verifica si hay un video en el contenedor
  else if (contenedor.querySelector('video')) {
    const video = contenedor.querySelector('video');
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = video.src;
    enlaceDescarga.download = 'video.mp4'; // Nombre del archivo para descargar
    enlaceDescarga.click();
  } 
  // Si no hay ni imagen ni video
  else {
    alert('No se encontró un archivo descargable en este contenedor.');
  }
}
