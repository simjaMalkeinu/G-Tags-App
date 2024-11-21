const { contextBridge, ipcRenderer } = require('electron')

// Exponemos una API para el renderer
contextBridge.exposeInMainWorld('electron', {
  // Método para solicitar al main que verifique las actualizaciones
  checkForUpdates: () => ipcRenderer.send('check-for-updates'),

  // Escuchar el estado de las actualizaciones
  onUpdateStatus: callback => ipcRenderer.on('update-status', callback)
})
