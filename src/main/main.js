const { app, BrowserWindow } = require('electron')
const path = require('path')
const routes = require('./config/routes') // Archivo que define las rutas
const setupAutoUpdater = require('./config/autoUpdater') // Importa la configuración de autoUpdater

let mainWindow

function createMainWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false
    }
  })

  mainWindow.loadFile(path.join(__dirname, routes.index))
}

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

  // Configuración de autoUpdater
  setupAutoUpdater(mainWindow, app)
})
