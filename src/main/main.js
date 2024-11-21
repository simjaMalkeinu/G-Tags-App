const { app, BrowserWindow } = require('electron')
const path = require('path')
const { autoUpdater } = require('electron-updater')
const routes = require('./config/routes') // Archivo que define las rutas

let mainWindow

// config the autoUpdater
autoUpdater.autoDownload = false
autoUpdater.autoInstallOnAppQuit = true

function createMainWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Archivo preload para comunicación entre procesos
      nodeIntegration: false // Seguridad
    }
  })

  mainWindow.loadFile(path.join(__dirname, routes.index)) // Ruta del archivo principal

  // Manejo de actualizaciones
  mainWindow.webContents.send('update-status', 'Verificando actualizaciones...')
  autoUpdater.checkForUpdatesAndNotify()
}

// autoUpdater.checkForUpdatesAndNotify()

// Función para manejar actualizaciones automáticas
autoUpdater.on('checking-for-update', () => {
  console.log('Checking for updates...')
})

autoUpdater.on('update-available', () => {
  console.log('Update available')
  mainWindow.webContents.send('update-status', '¡Actualización disponible!')
})

autoUpdater.on('update-not-available', () => {
  console.log('Update not available')
  mainWindow.webContents.send('update-status', 'No hay actualizaciones.')
})

autoUpdater.on('error', error => {
  console.error('Error updating:', error)
  mainWindow.webContents.send('update-status', `Error: ${error.message}`)
})

// Eventos de la aplicación
app.whenReady().then(() => {
  createMainWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
})
