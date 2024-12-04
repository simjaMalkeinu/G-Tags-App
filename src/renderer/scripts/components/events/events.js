import idElements from '../../../utils/idElements.js'
import { getHistory } from '../../db.js'
import { expirationDate, setNewExpirationDate } from '../../functions/expirationDate.js'
import { generateLot, personalizeLot } from '../../functions/generateLot.js'
import { setLot } from '../../functions/setLot.js'
import { getInputs } from '../inputs/getInput.js'
import { printPDF, savePDF } from '../pdfs/eventsPDF.js'
import { updateQr } from '../qr/qr.js'
import { setValidations } from '../validation/validations.js'
import { editTags } from './edit.js'
import { generateNewTags } from './generate.js'
import { printHistory } from './printHistory.js'
import { resetGenerate, resetRead } from './resets.js'
import { vinculateSwitch } from './switch.js'

export const initializeEvents = () => {
  const {
    iNumPart,
    iLot,
    iOperation,
    iTotalQuantity,
    iStandar,
    iUnit,
    iDateLot,
    iTurn,
    iExpirationDays,
    irExpirationDays
  } = getInputs()

  document
    .getElementById(idElements.id_f_generate)
    .addEventListener('submit', generateNewTags)

  document
    .getElementById(idElements.id_f_generate)
    .addEventListener('reset', resetGenerate)

  document
    .getElementById(idElements.id_f_edit)
    .addEventListener('submit', editTags)

  document
    .getElementById(idElements.id_f_edit)
    .addEventListener('reset', resetRead)

  vinculateSwitch(idElements.id_btn_expdate, idElements.id_e_expdate)
  vinculateSwitch(idElements.id_btn_recdate, idElements.id_e_recdate)
  vinculateSwitch(idElements.id_btn_secuence, idElements.id_e_secuence)

  vinculateSwitch(idElements.id_btn_r_expdate, idElements.id_e_r_expdate)
  vinculateSwitch(idElements.id_btn_r_recdate, idElements.id_e_r_recdate)
  vinculateSwitch(idElements.id_btn_r_secuence, idElements.id_e_r_secuence)

  document
    .getElementById(idElements.id_btn_autoLot)
    .addEventListener('click', generateLot)

  document
    .getElementById(idElements.id_btn_personalize)
    .addEventListener('click', personalizeLot)

  document
    .getElementById('btn-get-historial')
    .addEventListener('click', getHistory)

  document
    .getElementById('btn-print-historial')
    .addEventListener('click', printHistory)

  document.getElementById('save-pdf-btn').addEventListener('click', savePDF)
  document.getElementById('print-pdf-btn').addEventListener('click', printPDF)

  iNumPart.addEventListener('input', updateQr)
  iLot.addEventListener('input', updateQr)
  iOperation.addEventListener('input', updateQr)
  iTotalQuantity.addEventListener('input', updateQr)
  iStandar.addEventListener('input', updateQr)
  iUnit.addEventListener('input', updateQr)

  iDateLot.addEventListener('input', setLot)
  iTurn.addEventListener('input', setLot)

  iExpirationDays.addEventListener('input', expirationDate)
  irExpirationDays.addEventListener('input', setNewExpirationDate)

  setValidations()
}
