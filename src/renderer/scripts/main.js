/* global M */

// Escuchamos los mensajes enviados desde el main a través de preload
window.electron.onUpdateStatus((event, status) => {
  M.toast({
    html: `${status}`,
    displayLength: 2500, // Duración en milisegundos (default: 4000)
    classes: 'rounded' // Clase adicional para dar estilo
  })
})

window.electron.onStatusDownload((event, status) => {
  console.log(status)
})

const updateOnlineStatus = () => {
  document.getElementById('status-icon').innerHTML = navigator.onLine
    ? '<i class="fa-solid fa-wifi"></i>'
    : '<i class="fa-solid fa-triangle-exclamation"></i>'

  document.getElementById('status-text').innerHTML = navigator.onLine
    ? 'online'
    : 'ofline'

  if (navigator.onLine) {
    window.electron.checkForUpdates()
  } else {
    M.toast({
      html: 'It is offline, we cannot check if there is a new version.',
      displayLength: 2500, // Duración en milisegundos (default: 4000)
      classes: 'rounded' // Clase adicional para dar estilo
    })
  }
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

updateOnlineStatus()
