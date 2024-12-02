/* global jspdf QRCode */

import idElements from '../../../utils/idElements.js'
import { configTag } from '../../config/constants.js'
import { getSwitchs } from '../buttons.js/checkbox.js'
import { getDataInputs } from '../inputs/getData.js'
import { nextLetter } from '../../functions/addSufix.js'

export const editTags = e => {
  e.preventDefault()

  const {
    rNumPart,
    rLot,
    rOperation,
    rQuantity,
    rFolio,
    // rRegister,
    rReceivedDate,
    rExpirationDate,
    rSecuence,
    rUnit
  } = getDataInputs()

  const { rswtExpDate, rswtRecDate, rswtSecuence } = getSwitchs()

  const qrCanvas = document.getElementById(idElements.id_rc_qr)

  const validateRC = rNumPart.length < 8
  qrCanvas.innerHTML = ''

  console.log('editing the tag...')
  const { PAGE_WIDTH, PAGE_HEIGHT, MARGINS, QR_SIZE } = configTag

  const JsPDF = jspdf.jsPDF
  const doc = new JsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [PAGE_WIDTH, PAGE_HEIGHT]
  })

  let QRInfo = ''
  let foliotext = ''

  let num = rFolio
  num = num.split('-')
  // console.log(num[1]) // 0005B

  QRInfo = `${num[0]}-${nextLetter(num[1])}\t ${QRInfo}`
  foliotext = `${num[0]}-${nextLetter(num[1])}`
  // const qrText = `RC:${rc}\t LOTE:${lote}\t CANTIDAD:${cantidad}\t gOperation:${gOperation};`;

  QRInfo = `${rFolio} ${rNumPart}\t ${rLot}\t ${rQuantity}\t ${rUnit}\t ${rOperation}\t`

  const qrCode = new QRCode(qrCanvas, {
    width: 158,
    height: 158
  })

  qrCode.makeCode(QRInfo)

  const canvas = qrCanvas.querySelector('canvas')

  if (canvas) {
    const imgData = canvas.toDataURL('image/png')

    // El resto de tu código para dibujar en el documento PDF aquí...
    // Añade el texto y el QR en cada página
    doc.setFontSize(12)

    const titleTag = validateRC ? 'RC:' : 'UEPS:'
    const fontSizeTag = 12
    // Datos de la etiqueta
    const tagInfo = [
      [
        {
          content: titleTag + ' ' + rNumPart,
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
          content: rLot,
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
          content: rQuantity + ' ' + rUnit,
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
          content: rOperation,
          styles: { fontStyle: 'bold', fontSize: fontSizeTag }
        }
      ])
    }

    if (rswtExpDate.checked) {
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
          content: rExpirationDate,
          styles: { fontStyle: 'bold', fontSize: fontSizeTag }
        }
      ])
    }

    if (rswtRecDate.checked) {
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
          content: rReceivedDate,
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
    doc.text(foliotext, 64, 41) // Asegúrate de ajustar estas coordenadas según tus necesidades

    doc.text('Nomina', 64, 46)
    // Ajusta estas coordenadas según sea necesario para eliminar los márgenes no deseados
    doc.rect(76, 42, 18, 4.5)

    if (rswtSecuence.checked) {
      const longitud = Math.ceil(rSecuence.length / 2)
      const centrado = Math.ceil(57 / 2 - longitud) - 5

      doc.text(rSecuence, centrado, 48)

      doc.setFontSize(8)
      // doc.text(`${secuencia} de ${cantEtiquetas}`, 78, 50)
      // doc.text(`${"Observaciones: " + observaciones}`, 2, 48);
    }
  }

  // Convertir PDF a Blob y mostrarlo en el iframe
  const pdfBlob = doc.output('blob')
  const pdfURL = URL.createObjectURL(pdfBlob)

  const pdfPreview = document.getElementById('pdf-preview')
  pdfPreview.src = `${pdfURL}#toolbar=0&navpanes=0`
}
