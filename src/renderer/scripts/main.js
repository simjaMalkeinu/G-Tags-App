/* global M */
/* global versions */

const information = document.getElementById('info')

information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

// Escuchamos los mensajes enviados desde el main a través de preload
window.electron.onUpdateStatus((event, status) => {
  // Actualizamos el contenido del DOM según el mensaje recibido
  document.getElementById('updateStatus').innerText = status

  M.toast({
    html: ` ${status} 😃`,
    displayLength: 2500, // Duración en milisegundos (default: 4000)
    classes: 'rounded' // Clase adicional para dar estilo
  })
})

window.electron.onStatusDownload((event, status) => {
  document.getElementById('percentage').innerHTML = status
})
