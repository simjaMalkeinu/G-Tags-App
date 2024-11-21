/* global M */

document.getElementById('checkUpdatesButton').addEventListener('click', () => {
  // Llamamos al main para que empiece a verificar actualizaciones
  window.electron.checkForUpdates()
})

// Escuchamos los mensajes enviados desde el main a través de preload
window.electron.onUpdateStatus((event, status) => {
  // Actualizamos el contenido del DOM según el mensaje recibido
  document.getElementById('updateStatus').innerText = status

  M.toast({
    html: ` ${status} 😃`,
    displayLength: 4000, // Duración en milisegundos (default: 4000)
    classes: 'rounded' // Clase adicional para dar estilo
  })
})
