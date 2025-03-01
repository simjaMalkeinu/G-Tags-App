const { app, BrowserWindow, ipcMain } = require('electron')
const { autoUpdater } = require('electron-updater')
const path = require('path')
const routes = require('./config/routes') // Archivo que define las rutas
const setupAutoUpdater = require('./config/autoUpdater') // Importa la configuración de autoUpdater

const db = require('../database/db')
const {
  setupDownloadHandler,
  setupPrintHandler
} = require('./config/eventHandlers')

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

  // Cargar la página principal de la aplicación sin react
  // mainWindow.loadFile(path.join(__dirname, routes.index))

  // Cargar la página principal de la aplicación con react
  mainWindow.loadFile(path.join(__dirname, "../renderer/app/dist/index.html"))

  // Cargar la página principal de la aplicación desde desarrollo con vite
  // mainWindow.loadURL('http://localhost:5173/')

  // Manejar eventos de descarga
  setupDownloadHandler(mainWindow)

  // Interceptar impresión
  setupPrintHandler(mainWindow)
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

ipcMain.handle('db:addRecord', (evento, registro) => {
  // console.log(registro)
  return db.insertarRegistro(registro)
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
