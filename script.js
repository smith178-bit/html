// Configuración
const tiempoDePause = 10 * 60 * 1000; // 5 minutos
const audioPersonalizado = document.getElementById('audio-personalizado');
const iframe = document.getElementById('spotify-iframe');

// Función para pausar la playlist de Spotify y reproducir el audio personalizado
function pausarYReproducirAudio() {
  // Pausar la playlist de Spotify
  iframe.contentWindow.postMessage('pause', '*');

  // Reproducir el audio personalizado
  audioPersonalizado.play();

  // Esperar a que termine de reproducir el audio personalizado
  setTimeout(() => {
    // Reanudar la playlist de Spotify
    iframe.contentWindow.postMessage('play', '*');
  }, audioPersonalizado.duration * 1000);
}

// Configuración del temporizador
setInterval(pausarYReproducirAudio, tiempoDePause);