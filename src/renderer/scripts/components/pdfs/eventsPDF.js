import { getLocalStorage } from '../../config/storage.js'
import { registerGeneration } from '../../db.js'
import { nextLetter } from '../../functions/addSufix.js'
import { getDataInputs } from '../inputs/getData.js'

export const savePDF = () => {
  const { area, plant } = getLocalStorage()
  const { rNumPart, rFolio } = getDataInputs()

  const iframe = document.getElementById('pdf-preview')
  const pdfUrl = iframe.src

  let num = rFolio
  num = num.split('-')

  const newFolio = `${num[0]}-${nextLetter(num[1])}`

  // Crear un enlace para descargar el archivo
  const link = document.createElement('a')
  link.href = pdfUrl
  link.download = 'etiqueta reimpresa.pdf'
  link.click()

  // Enviar acción para guardar el archivo al proceso principal
  //   window.electronAPI.savePDF(pdfUrl)
  registerGeneration({
    tipo: 'Edicion',
    area,
    planta: plant,
    num_part: rNumPart,
    numero_etiquetas: 1,
    inicio_seriado: rFolio,
    final_seriado: newFolio
  })
}

export const printPDF = () => {
  const { area, plant } = getLocalStorage()
  const { rNumPart, rFolio } = getDataInputs()
  const iframe = document.getElementById('pdf-preview')

  // Usar la función `print` del iframe
  iframe.contentWindow.focus()
  iframe.contentWindow.print()

  let num = rFolio
  num = num.split('-')

  const newFolio = `${num[0]}-${nextLetter(num[1])}`

  // Enviar acción para imprimir al proceso principal
  //   window.electronAPI.printPDF()
  registerGeneration({
    tipo: 'Edicion',
    area,
    planta: plant,
    num_part: rNumPart,
    numero_etiquetas: 1,
    inicio_seriado: rFolio,
    final_seriado: newFolio
  })
}
