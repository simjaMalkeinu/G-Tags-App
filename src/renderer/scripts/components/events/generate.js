/* global jspdf QRCode M */
import { configTag } from '../../config/constants.js'
import { getDataInputs } from '../inputs/getData.js'
import {
  validateExpDate,
  validateRecDate,
  validateSecuence
} from '../validation/extraData.js'
import { validateLot } from '../validation/lots.js'
import validateNumPart from '../validation/numPart.js'
import { validateOperation } from '../validation/operation.js'
import { getLocalStorage, setLocalStorage } from '../../config/storage.js'
import idElements from '../../../utils/idElements.js'
import { getSwitchs } from '../buttons.js/checkbox.js'
import { validateStandar, validateTotalQty } from '../validation/quantities.js'

export const generateNewTags = e => {
  e.preventDefault()

  // validar los datos
  if (
    !(
      validateNumPart() &&
      validateLot() &&
      validateOperation() &&
      validateTotalQty() &&
      validateStandar() &&
      validateExpDate() &&
      validateRecDate() &&
      validateSecuence()
    )
  ) {
    return
  }

  console.log('Generating new tags...')

  const { PAGE_WIDTH, PAGE_HEIGHT, MARGINS, QR_SIZE } = configTag
  const {
    gNumPart,
    gLot,
    gTotalQuantity,
    gStandar,
    gOperation,
    gUnit,
    gReceivedDate,
    gExpirationDate,
    gSecuence
  } = getDataInputs()
  const { area, invoice, julDay } = getLocalStorage()
  console.log(invoice)

  const { swtExpDate, swtRecDate, swtSecuence } = getSwitchs()

  const validateRC = gNumPart.length < 10

  const qrCanvas = document.getElementById(idElements.id_c_qr)

  // Crea un nuevo documento PDF con tamaño personalizado y sin márgenes
  const JsPDF = jspdf.jsPDF // Crear un alias con mayúscula
  const doc = new JsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [PAGE_WIDTH, PAGE_HEIGHT]
  })

  let cantEtiquetas = 0
  let res = 0

  let secuencia = 1

  cantEtiquetas = Math.ceil(
    parseFloat(gTotalQuantity, 10) / parseFloat(gStandar, 10)
  )

  res = parseFloat(gTotalQuantity, 10)

  for (let i = invoice; i < invoice + cantEtiquetas; i++) {
    // Limpia el contenedor QR para cada nueva generación
    qrCanvas.innerHTML = ''

    // Formatear los datos en el formato deseado
    let qrText = ''
    // const qrText = `RC:${rc}\t LOTE:${lote}\t CANTIDAD:${cantidad}\t gOperation:${gOperation};`;

    qrText = `${gNumPart}\t ${gLot}\t ${
      res >= gStandar ? gStandar : res
    }\t ${gUnit}\t ${gOperation}\t`

    console.log(qrText)

    let folioTag = ''

    let QRInfo = ''

    // Agrega un identificador único al texto del QR para cada caja
    QRInfo = `${area}${julDay}-${(i + 1)
      .toString()
      .padStart(4, '0')}\t ${qrText}`

    console.log(QRInfo)

    folioTag = `${area}${julDay}-${(i + 1).toString().padStart(4, '0')}`

    console.log(folioTag)

    const qrCode = new QRCode(qrCanvas, {
      width: 158,
      height: 158
    })

    qrCode.makeCode(QRInfo)

    const canvas = qrCanvas.querySelector('canvas')
    if (canvas) {
      const imgData = canvas.toDataURL('image/png')
      // Asegúrate de crear el objeto `doc` de jsPDF fuera de este bucle si aún no está creado.
      // Agrega una nueva página para cada caja, excepto para la primera
      if (i > invoice) doc.addPage([PAGE_WIDTH, PAGE_HEIGHT], 'landscape')

      // El resto de tu código para dibujar en el documento PDF aquí...
      // Añade el texto y el QR en cada página
      doc.setFontSize(12)

      const titleTag = validateRC ? 'RC:' : 'UEPS:'
      const fontSizeTag = 12
      // Datos de la etiqueta
      const tagInfo = [
        [
          {
            content: titleTag + ' ' + gNumPart,
            colSpan: 2,
            styles: { fontStyle: 'bold', fontSize: fontSizeTag }
          }
        ],
        [
          {
            content: 'Lote:',
            styles: {
              fontStyle: 'normal',
              fontSize: fontSizeTag,
              halign: 'right'
            }
          },
          {
            content: gLot,
            styles: { fontStyle: 'bold', fontSize: fontSizeTag }
          }
        ],
        [
          {
            content: 'Cantidad:',
            styles: {
              fontStyle: 'normal',
              fontSize: fontSizeTag,
              halign: 'right'
            }
          },
          {
            content:
              res >= gStandar ? gStandar + ' ' + gUnit : res + ' ' + gUnit,
            styles: { fontStyle: 'bold', fontSize: fontSizeTag }
          }
        ]
      ]

      if (validateRC) {
        tagInfo.push([
          {
            content: 'Op:',
            styles: {
              fontStyle: 'normal',
              fontSize: fontSizeTag,
              halign: 'right'
            }
          },
          {
            content: gOperation,
            styles: { fontStyle: 'bold', fontSize: fontSizeTag }
          }
        ])
      }

      if (swtExpDate.checked) {
        tagInfo.push([
          {
            content: 'CAD:',
            styles: {
              fontStyle: 'normal',
              fontSize: fontSizeTag,
              halign: 'right'
            }
          },
          {
            content: gExpirationDate,
            styles: { fontStyle: 'bold', fontSize: fontSizeTag }
          }
        ])
      }

      if (swtRecDate.checked) {
        tagInfo.push([
          {
            content: 'Ingreso:',
            styles: {
              fontStyle: 'normal',
              fontSize: fontSizeTag - 4,
              halign: 'right'
            }
          },
          {
            content: gReceivedDate,
            styles: { fontStyle: 'bold', fontSize: fontSizeTag - 4 }
          }
        ])
      }

      // Usar autoTable para crear la tabla
      doc.autoTable({
        // theme: "plain", // Aplicar el tema "plain"
        theme: 'grid',
        body: tagInfo,
        startY: MARGINS.top,
        margin: MARGINS,
        tableWidth: 60,
        styles: {
          halign: 'center',
          textColor: [0, 0, 0]
          // lineColor: [0, 0, 255], // Color de línea (azul)
          // lineWidth: 0.1, // Ancho de línea (mínimo para que no se vea) },
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245]
        },
        columnStyles: {
          0: { cellWidth: 22 },
          1: { cellWidth: 38 }
        }
      })

      // Incluye el identificador único también en el texto que se añade al PDF
      doc.addImage(imgData, 'PNG', 64, 2, QR_SIZE, QR_SIZE) // Añade el QR generado al PDF

      // Añade el texto y el QR en cada página
      doc.setFontSize(9)
      doc.text(folioTag, 64, 41) // Asegúrate de ajustar estas coordenadas según tus necesidades

      doc.text('Nomina', 64, 46)
      // Ajusta estas coordenadas según sea necesario para eliminar los márgenes no deseados
      doc.rect(76, 42, 18, 4.5)

      if (swtSecuence.checked) {
        const longitud = Math.ceil(gSecuence.length / 2)
        const centrado = Math.ceil(57 / 2 - longitud) - 5

        doc.text(gSecuence, centrado, 48)

        doc.setFontSize(8)
        doc.text(`${secuencia} de ${cantEtiquetas}`, 78, 50)
        // doc.text(`${"Observaciones: " + observaciones}`, 2, 48);
      }
    }
    res = res - parseFloat(gStandar, 10)
    secuencia += 1
  }

  // localStorage.setItem('Invoice', invoice + parseInt(cantEtiquetas, 10))
  setLocalStorage('invoice', invoice + parseInt(cantEtiquetas, 10))

  // Guarda o descarga el PDF al finalizar el bucle
  doc.save(`TAGS-${gNumPart}${gOperation}.pdf`)

  const text = validateRC ? ' el RC ' : 'la CLAVE UEPS '

  M.toast({
    html:
      'Etiquetas generadas exitosamente con ' +
      text +
      '<strong> ' +
      gNumPart +
      '</strong>',
    displayLength: 2500, // Duración en milisegundos (default: 4000)
    classes: 'rounded' // Clase adicional para dar estilo
  })
}
