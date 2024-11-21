document.getElementById('checkUpdatesButton').addEventListener('click', () => {
  // Llamamos al main para que empiece a verificar actualizaciones
  window.electron.checkForUpdates()
})

// Escuchamos los mensajes enviados desde el main a través de preload
window.electron.onUpdateStatus((event, status) => {
  // Actualizamos el contenido del DOM según el mensaje recibido
  document.getElementById('updateStatus').innerText = status
})
