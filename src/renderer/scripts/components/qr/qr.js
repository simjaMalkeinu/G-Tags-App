/* global QRCode */

import idElements from '../../../utils/idElements.js'
import { getDataInputs } from '../inputs/getData.js'

export const updateQr = () => {
  //   console.log('Updating QR code...')

  const { gNumPart, gLot, gStandar, gUnit, gOperation } = getDataInputs()

  const qrData = `${gNumPart}\t ${gLot}\t ${gStandar}\t ${gUnit}\t ${gOperation}\t`

  // console.log(qrData)

  const qrCanvas = document.getElementById(idElements.id_c_qr)

  qrCanvas.innerHTML = '' // Limpiar el contenedor QR anterior

  const qrCode = new QRCode(qrCanvas, {
    width: 158, // Tamaño del QR
    height: 158,
    colorDark: '#1f2937', // Color del código QR
    colorLight: '#f3f4f6', // Color de fondo del QR
    correctLevel: QRCode.CorrectLevel.H
  })
  // console.log(qrCode)
  qrCode.makeCode(qrData)
}
