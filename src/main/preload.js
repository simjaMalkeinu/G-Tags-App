const { contextBridge, ipcRenderer } = require('electron')

// Exponemos una API para el renderer
contextBridge.exposeInMainWorld('electron', {
  // Método para solicitar al main que verifique las actualizaciones
  checkForUpdates: () => ipcRenderer.send('checking-for-update'),

  // Escuchar el estado de las actualizaciones
  onUpdateStatus: callback => ipcRenderer.on('update-status', callback),

  // Status of download
  onStatusDownload: callback => ipcRenderer.on('status-downloaded', callback)
})

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
})

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title)
})
