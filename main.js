const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const { autoUpdater } = require('electron-updater')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Cargar preload
      nodeIntegration: false
    }
  })

  win.loadFile('index.html') // URL de tu renderer (puede ser un archivo HTML o una URL de desarrollo)

  // Escuchar la señal de que el renderer está listo
  ipcMain.on('check-for-updates', () => {
    // Enviar un mensaje al renderer que las actualizaciones están siendo verificadas
    win.webContents.send('update-status', 'Verificando actualizaciones...')

    // Comienza la verificación de actualizaciones
    autoUpdater.checkForUpdatesAndNotify()
    // autoUpdater.checkForUpdates()

    // Configuración de actualización (esto es un ejemplo, debes ajustarlo según tus necesidades)
    autoUpdater.on('checking-for-update', () => {
      console.log('Checking for updates...')
    })

    autoUpdater.on('update-available', () => {
      console.log('Update available')
      win.webContents.send('update-status', 'Actualización disponible!')
    })

    autoUpdater.on('update-not-available', () => {
      console.log('Update not available')
      win.webContents.send('update-status', 'No hay actualizaciones.')
    })

    autoUpdater.on('error', error => {
      console.error('Error updating:', error)
      win.webContents.send('update-status', `Error: ${error.message}`)
    })
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
