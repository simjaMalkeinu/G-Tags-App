const { app, BrowserWindow, ipcMain } = require('electron')
const { autoUpdater } = require('electron-updater')
const path = require('path')
const routes = require('./config/routes') // Archivo que define las rutas
const setupAutoUpdater = require('./config/autoUpdater') // Importa la configuración de autoUpdater

const db = require('../database/db')

let mainWindow

function createMainWindow () {
  mainWindow = new BrowserWindow({
    width: 800, // Tamaño inicial
    height: 900, // Tamaño inicial
    minWidth: 700, // Ancho mínimo
    minHeight: 900, // Alto mínimo
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false
    }
  })

  mainWindow.loadFile(path.join(__dirname, routes.index))
}

// Escucha el evento para iniciar la búsqueda de actualizaciones
ipcMain.on('check-for-updates', () => {
  console.log('Buscando actualizaciones...')
  autoUpdater.checkForUpdatesAndNotify()
})

// Manejar consultas desde el renderizador
ipcMain.handle('db:getRecords', () => {
  return db.obtenerRegistros()
})

// Manejador para enviar la fecha actual
ipcMain.handle('get-current-date', () => {
  return new Date().toISOString() // Envía la fecha en formato ISO
})

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
