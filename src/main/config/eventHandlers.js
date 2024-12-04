// eventHandlers.js

module.exports = {
  setupDownloadHandler: mainWindow => {
    // Manejar eventos de descarga
    mainWindow.webContents.session.on('will-download', (event, item) => {
      const fileName = item.getFilename()
      const filePath = item.getSavePath()

      console.log(`Descarga iniciada: ${fileName} en ${filePath}`)

      // Registrar cuando termine la descarga
      item.once('done', (e, state) => {
        if (state === 'completed') {
          // console.log('Descarga completada:', fileName)
          mainWindow.webContents.send('download-status', {
            status: 'completed',
            fileName,
            filePath
          })
        } else {
          // console.log('Descarga fallida:', fileName)
          mainWindow.webContents.send('download-status', {
            status: 'failed',
            fileName
          })
        }
      })
    })
  },

  setupPrintHandler: mainWindow => {
    // Interceptar impresión
    mainWindow.webContents.on('did-start-print', () => {
      // console.log('El usuario abrió el diálogo de impresión.')
      mainWindow.webContents.send('print-status', { status: 'started' })
    })
  }
}
