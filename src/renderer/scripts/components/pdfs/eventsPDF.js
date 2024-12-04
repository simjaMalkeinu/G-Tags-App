import { getLocalStorage } from '../../config/storage.js'
import { registerGeneration } from '../../db.js'
import { nextLetter } from '../../functions/addSufix.js'
import { getCurrentDate } from '../../functions/getDate.js'
import { getDataInputs } from '../inputs/getData.js'

export const savePDF = async () => {
  const { area, plant } = getLocalStorage()
  const { rNumPart, rFolio, rOperation } = getDataInputs()

  const iframe = document.getElementById('pdf-preview')
  const pdfUrl = iframe.src

  let num = rFolio
  num = num.split('-')

  const newFolio = `${num[0]}-${nextLetter(num[1])}`

  // Crear un enlace para descargar el archivo
  const link = document.createElement('a')
  link.href = pdfUrl

  await getCurrentDate()
    .then(currentDate => {
      const today = new Date(currentDate)

      const docDate = `${today.getDate().toString().padStart(2, '0')}-${(
        today.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${today.getFullYear()} (${today.getHours()}_${today
        .getMinutes()
        .toString()
        .padStart(2, '0')})`

      link.download = `TAG-${rNumPart} ${
        rOperation !== '' ? `(OP-${rOperation})` : ''
      } ${docDate}.pdf`

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
    })
    .catch(err => console.log(err))
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
