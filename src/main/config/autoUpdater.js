// autoUpdater.js
const { autoUpdater } = require('electron-updater')

function setupAutoUpdater (mainWindow, app) {
  // Configuración inicial
  autoUpdater.autoDownload = false
  autoUpdater.autoInstallOnAppQuit = true

  // Eventos de autoUpdater
  autoUpdater.on('checking-for-update', () => {
    console.log('Checking for updates...')
  })

  // Evento para notificar que hay una actualización disponible
  autoUpdater.on('update-available', info => {
    console.log('Actualización disponible:', info.version)

    // Notificar al renderer
    mainWindow.webContents.send(
      'update-status',
      `¡Actualización disponible a la versión (${info.version})! Descargando...`
    )

    // Iniciar descarga
    downloadUpdate()
  })

  // Función para manejar la descarga
  function downloadUpdate () {
    autoUpdater
      .downloadUpdate()
      .then(() => {
        console.log('Actualización descargada.')

        // Notificar al renderer que se descargó
        mainWindow.webContents.send(
          'update-status',
          '¡Actualización descargada! Instalando...'
        )

        // Reiniciar la app e instalar la actualización
        autoUpdater.quitAndInstall()
      })
      .catch(err => {
        console.error('Error al descargar la actualización:', err)

        // Notificar al renderer sobre el error
        mainWindow.webContents.send(
          'update-status',
          `Error al descargar la actualización: ${err.message}`
        )
      })
  }

  autoUpdater.on('download-progress', progressObj => {
    const logMessage = `Descargando: ${Math.round(
      progressObj.percent
    )}% completado.`

    console.log(logMessage)
    mainWindow.webContents.send('status-downloaded', logMessage)
  })

  // Download Completion Message
  autoUpdater.on('update-downloaded', info => {
    mainWindow.webContents.send(
      'update-status',
      `Update downloaded. Current version ${app.getVersion()}`
    )
  })

  autoUpdater.on('update-not-available', () => {
    console.log('Update not available')
    mainWindow.webContents.send('update-status', 'No hay actualizaciones.')
  })

  autoUpdater.on('error', error => {
    console.error('Error updating:', error)
    mainWindow.webContents.send('update-status', `Error: ${error.message}`)
  })

  mainWindow.webContents.send(
    'update-status',
    `Checking for updates. Current version ${app.getVersion()}`
  )

  // Inicia la búsqueda de actualizaciones
  autoUpdater.checkForUpdatesAndNotify()
}

module.exports = setupAutoUpdater
