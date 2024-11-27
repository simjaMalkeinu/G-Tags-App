import idElements from '../../../utils/idElements.js'
import { generateLot } from '../../functions/generateLot.js'
import { getInputs } from '../inputs/getInput.js'
import { updateQr } from '../qr/qr.js'
import { setValidations } from '../validation/validations.js'
import { editTags } from './edit.js'
import { generateNewTags } from './generate.js'
import { vinculateSwitch } from './switch.js'

export const initializeEvents = () => {
  const { iNumPart, iLot, iOperation, iTotalQuantity, iStandar, iUnit } = getInputs()

  document
    .getElementById(idElements.id_f_generate)
    .addEventListener('submit', generateNewTags)

  document
    .getElementById(idElements.id_f_edit)
    .addEventListener('submit', editTags)

  vinculateSwitch(idElements.id_btn_expdate, idElements.id_e_expdate)
  vinculateSwitch(idElements.id_btn_recdate, idElements.id_e_recdate)
  vinculateSwitch(idElements.id_btn_secuence, idElements.id_e_secuence)

  document
    .getElementById(idElements.id_btn_autoLot)
    .addEventListener('click', generateLot)

  iNumPart.addEventListener('input', updateQr)
  iLot.addEventListener('input', updateQr)
  iOperation.addEventListener('input', updateQr)
  iTotalQuantity.addEventListener('input', updateQr)
  iStandar.addEventListener('input', updateQr)
  iUnit.addEventListener('input', updateQr)

  setValidations()
}
